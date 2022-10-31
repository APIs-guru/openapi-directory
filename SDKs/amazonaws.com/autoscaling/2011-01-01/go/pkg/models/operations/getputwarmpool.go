package operations




type GetPutWarmPoolActionEnum string

const (
    GetPutWarmPoolActionEnumPutWarmPool GetPutWarmPoolActionEnum = "PutWarmPool"
)



type GetPutWarmPoolPoolStateEnum string

const (
    GetPutWarmPoolPoolStateEnumStopped GetPutWarmPoolPoolStateEnum = "Stopped"
GetPutWarmPoolPoolStateEnumRunning GetPutWarmPoolPoolStateEnum = "Running"
)



type GetPutWarmPoolVersionEnum string

const (
    GetPutWarmPoolVersionEnumTwoThousandAndEleven0101 GetPutWarmPoolVersionEnum = "2011-01-01"
)


type GetPutWarmPoolQueryParams struct {
    Action GetPutWarmPoolActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    MaxGroupPreparedCapacity *int64 `queryParam:"style=form,explode=true,name=MaxGroupPreparedCapacity"`
    MinSize *int64 `queryParam:"style=form,explode=true,name=MinSize"`
    PoolState *GetPutWarmPoolPoolStateEnum `queryParam:"style=form,explode=true,name=PoolState"`
    Version GetPutWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetPutWarmPoolHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPutWarmPoolRequest struct {
    QueryParams GetPutWarmPoolQueryParams 
    Headers GetPutWarmPoolHeaders 
    
}

type GetPutWarmPoolResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

