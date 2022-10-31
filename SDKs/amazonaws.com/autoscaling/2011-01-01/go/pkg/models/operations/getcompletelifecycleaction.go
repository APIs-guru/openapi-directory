package operations




type GetCompleteLifecycleActionActionEnum string

const (
    GetCompleteLifecycleActionActionEnumCompleteLifecycleAction GetCompleteLifecycleActionActionEnum = "CompleteLifecycleAction"
)



type GetCompleteLifecycleActionVersionEnum string

const (
    GetCompleteLifecycleActionVersionEnumTwoThousandAndEleven0101 GetCompleteLifecycleActionVersionEnum = "2011-01-01"
)


type GetCompleteLifecycleActionQueryParams struct {
    Action GetCompleteLifecycleActionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    InstanceID *string `queryParam:"style=form,explode=true,name=InstanceId"`
    LifecycleActionResult string `queryParam:"style=form,explode=true,name=LifecycleActionResult"`
    LifecycleActionToken *string `queryParam:"style=form,explode=true,name=LifecycleActionToken"`
    LifecycleHookName string `queryParam:"style=form,explode=true,name=LifecycleHookName"`
    Version GetCompleteLifecycleActionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCompleteLifecycleActionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCompleteLifecycleActionRequest struct {
    QueryParams GetCompleteLifecycleActionQueryParams 
    Headers GetCompleteLifecycleActionHeaders 
    
}

type GetCompleteLifecycleActionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

