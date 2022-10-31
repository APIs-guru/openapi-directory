package operations

import (
"openapi/pkg/models/shared")


type CreateSubscriberXAmzTargetEnum string

const (
    CreateSubscriberXAmzTargetEnumAwsBudgetServiceGatewayCreateSubscriber CreateSubscriberXAmzTargetEnum = "AWSBudgetServiceGateway.CreateSubscriber"
)


type CreateSubscriberHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateSubscriberXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateSubscriberRequest struct {
    Headers CreateSubscriberHeaders 
    Request shared.CreateSubscriberRequest `request:"mediaType=application/json"`
    
}

type CreateSubscriberResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateSubscriberResponse map[string]interface{} 
    CreationLimitExceededException *interface{} 
    DuplicateRecordException *interface{} 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

