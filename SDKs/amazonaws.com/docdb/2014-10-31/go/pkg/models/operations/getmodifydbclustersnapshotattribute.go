package operations




type GetModifyDbClusterSnapshotAttributeActionEnum string

const (
    GetModifyDbClusterSnapshotAttributeActionEnumModifyDbClusterSnapshotAttribute GetModifyDbClusterSnapshotAttributeActionEnum = "ModifyDBClusterSnapshotAttribute"
)



type GetModifyDbClusterSnapshotAttributeVersionEnum string

const (
    GetModifyDbClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031 GetModifyDbClusterSnapshotAttributeVersionEnum = "2014-10-31"
)


type GetModifyDbClusterSnapshotAttributeQueryParams struct {
    Action GetModifyDbClusterSnapshotAttributeActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AttributeName string `queryParam:"style=form,explode=true,name=AttributeName"`
    DbClusterSnapshotIdentifier string `queryParam:"style=form,explode=true,name=DBClusterSnapshotIdentifier"`
    ValuesToAdd []string `queryParam:"style=form,explode=true,name=ValuesToAdd"`
    ValuesToRemove []string `queryParam:"style=form,explode=true,name=ValuesToRemove"`
    Version GetModifyDbClusterSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetModifyDbClusterSnapshotAttributeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetModifyDbClusterSnapshotAttributeRequest struct {
    QueryParams GetModifyDbClusterSnapshotAttributeQueryParams 
    Headers GetModifyDbClusterSnapshotAttributeHeaders 
    
}

type GetModifyDbClusterSnapshotAttributeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

