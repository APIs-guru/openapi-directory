package operations




type GetDeleteSnapshotActionEnum string

const (
    GetDeleteSnapshotActionEnumDeleteSnapshot GetDeleteSnapshotActionEnum = "DeleteSnapshot"
)



type GetDeleteSnapshotVersionEnum string

const (
    GetDeleteSnapshotVersionEnumTwoThousandAndFifteen0202 GetDeleteSnapshotVersionEnum = "2015-02-02"
)


type GetDeleteSnapshotQueryParams struct {
    Action GetDeleteSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    SnapshotName string `queryParam:"style=form,explode=true,name=SnapshotName"`
    Version GetDeleteSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteSnapshotHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteSnapshotRequest struct {
    QueryParams GetDeleteSnapshotQueryParams 
    Headers GetDeleteSnapshotHeaders 
    
}

type GetDeleteSnapshotResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

