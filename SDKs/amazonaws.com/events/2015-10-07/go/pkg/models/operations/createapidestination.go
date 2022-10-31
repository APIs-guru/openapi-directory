package operations

import (
"openapi/pkg/models/shared")


type CreateAPIDestinationXAmzTargetEnum string

const (
    CreateAPIDestinationXAmzTargetEnumAwsEventsCreateAPIDestination CreateAPIDestinationXAmzTargetEnum = "AWSEvents.CreateApiDestination"
)


type CreateAPIDestinationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAPIDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAPIDestinationRequest struct {
    Headers CreateAPIDestinationHeaders 
    Request shared.CreateAPIDestinationRequest `request:"mediaType=application/json"`
    
}

type CreateAPIDestinationResponse struct {
    ContentType string 
    CreateAPIDestinationResponse *shared.CreateAPIDestinationResponse 
    InternalException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

