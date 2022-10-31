package operations




type GetBatchApplyUpdateActionActionEnum string

const (
    GetBatchApplyUpdateActionActionEnumBatchApplyUpdateAction GetBatchApplyUpdateActionActionEnum = "BatchApplyUpdateAction"
)



type GetBatchApplyUpdateActionVersionEnum string

const (
    GetBatchApplyUpdateActionVersionEnumTwoThousandAndFifteen0202 GetBatchApplyUpdateActionVersionEnum = "2015-02-02"
)


type GetBatchApplyUpdateActionQueryParams struct {
    Action GetBatchApplyUpdateActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    CacheClusterIds []string `queryParam:"style=form,explode=true,name=CacheClusterIds"`
    ReplicationGroupIds []string `queryParam:"style=form,explode=true,name=ReplicationGroupIds"`
    ServiceUpdateName string `queryParam:"style=form,explode=true,name=ServiceUpdateName"`
    Version GetBatchApplyUpdateActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetBatchApplyUpdateActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetBatchApplyUpdateActionRequest struct {
    QueryParams GetBatchApplyUpdateActionQueryParams 
    Headers GetBatchApplyUpdateActionHeaders 
    
}

type GetBatchApplyUpdateActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

