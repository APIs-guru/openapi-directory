package operations

import (
"openapi/pkg/models/shared")


type UpdateNotificationXAmzTargetEnum string

const (
    UpdateNotificationXAmzTargetEnumAwsBudgetServiceGatewayUpdateNotification UpdateNotificationXAmzTargetEnum = "AWSBudgetServiceGateway.UpdateNotification"
)


type UpdateNotificationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateNotificationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateNotificationRequest struct {
    Headers UpdateNotificationHeaders 
    Request shared.UpdateNotificationRequest `request:"mediaType=application/json"`
    
}

type UpdateNotificationResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DuplicateRecordException *interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UpdateNotificationResponse map[string]interface{} 
    
}

