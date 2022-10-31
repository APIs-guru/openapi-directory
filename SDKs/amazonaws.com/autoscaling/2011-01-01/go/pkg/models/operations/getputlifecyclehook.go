package operations




type GetPutLifecycleHookActionEnum string

const (
    GetPutLifecycleHookActionEnumPutLifecycleHook GetPutLifecycleHookActionEnum = "PutLifecycleHook"
)



type GetPutLifecycleHookVersionEnum string

const (
    GetPutLifecycleHookVersionEnumTwoThousandAndEleven0101 GetPutLifecycleHookVersionEnum = "2011-01-01"
)


type GetPutLifecycleHookQueryParams struct {
    Action GetPutLifecycleHookActionEnum `queryParam:"style=form,explode=true,name=Action"`
    AutoScalingGroupName string `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
    DefaultResult *string `queryParam:"style=form,explode=true,name=DefaultResult"`
    HeartbeatTimeout *int64 `queryParam:"style=form,explode=true,name=HeartbeatTimeout"`
    LifecycleHookName string `queryParam:"style=form,explode=true,name=LifecycleHookName"`
    LifecycleTransition *string `queryParam:"style=form,explode=true,name=LifecycleTransition"`
    NotificationMetadata *string `queryParam:"style=form,explode=true,name=NotificationMetadata"`
    NotificationTargetArn *string `queryParam:"style=form,explode=true,name=NotificationTargetARN"`
    RoleArn *string `queryParam:"style=form,explode=true,name=RoleARN"`
    Version GetPutLifecycleHookVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetPutLifecycleHookHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetPutLifecycleHookRequest struct {
    QueryParams GetPutLifecycleHookQueryParams 
    Headers GetPutLifecycleHookHeaders 
    
}

type GetPutLifecycleHookResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

