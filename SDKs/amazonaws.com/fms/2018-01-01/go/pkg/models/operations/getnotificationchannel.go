package operations

import (
"openapi/pkg/models/shared")


type GetNotificationChannelXAmzTargetEnum string

const (
    GetNotificationChannelXAmzTargetEnumAwsfms20180101GetNotificationChannel GetNotificationChannelXAmzTargetEnum = "AWSFMS_20180101.GetNotificationChannel"
)


type GetNotificationChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetNotificationChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetNotificationChannelRequest struct {
    Headers GetNotificationChannelHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type GetNotificationChannelResponse struct {
    ContentType string 
    GetNotificationChannelResponse *shared.GetNotificationChannelResponse 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

