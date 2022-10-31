package operations




type GetDeleteSnapshotActionEnum string

const (
    GetDeleteSnapshotActionEnumDeleteSnapshot GetDeleteSnapshotActionEnum = "DeleteSnapshot"
)



type GetDeleteSnapshotVersionEnum string

const (
    GetDeleteSnapshotVersionEnumTwoThousandAndSixteen1115 GetDeleteSnapshotVersionEnum = "2016-11-15"
)


type GetDeleteSnapshotQueryParams struct {
    Action GetDeleteSnapshotActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DryRun *bool `queryParam:"style=form,explode=true,name=DryRun"`
    SnapshotID string `queryParam:"style=form,explode=true,name=SnapshotId"`
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
    ContentType string 
    StatusCode int64 
    
}

