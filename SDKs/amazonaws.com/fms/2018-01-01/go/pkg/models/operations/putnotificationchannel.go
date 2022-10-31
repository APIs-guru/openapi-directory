package operations

import (
"openapi/pkg/models/shared")


type PutNotificationChannelXAmzTargetEnum string

const (
    PutNotificationChannelXAmzTargetEnumAwsfms20180101PutNotificationChannel PutNotificationChannelXAmzTargetEnum = "AWSFMS_20180101.PutNotificationChannel"
)


type PutNotificationChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutNotificationChannelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutNotificationChannelRequest struct {
    Headers PutNotificationChannelHeaders 
    Request shared.PutNotificationChannelRequest `request:"mediaType=application/json"`
    
}

type PutNotificationChannelResponse struct {
    ContentType string 
    InternalErrorException *interface{} 
    InvalidOperationException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

