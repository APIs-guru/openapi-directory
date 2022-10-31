package operations

import (
"openapi/pkg/models/shared")


type CreatePartnerEventSourceXAmzTargetEnum string

const (
    CreatePartnerEventSourceXAmzTargetEnumAwsEventsCreatePartnerEventSource CreatePartnerEventSourceXAmzTargetEnum = "AWSEvents.CreatePartnerEventSource"
)


type CreatePartnerEventSourceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePartnerEventSourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePartnerEventSourceRequest struct {
    Headers CreatePartnerEventSourceHeaders 
    Request shared.CreatePartnerEventSourceRequest `request:"mediaType=application/json"`
    
}

type CreatePartnerEventSourceResponse struct {
    ConcurrentModificationException *interface{} 
    ContentType string 
    CreatePartnerEventSourceResponse *shared.CreatePartnerEventSourceResponse 
    InternalException *interface{} 
    LimitExceededException *interface{} 
    OperationDisabledException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    
}

