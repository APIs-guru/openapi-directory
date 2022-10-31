package operations

import (
"openapi/pkg/models/shared")


type GetDevEndpointXAmzTargetEnum string

const (
    GetDevEndpointXAmzTargetEnumAwsGlueGetDevEndpoint GetDevEndpointXAmzTargetEnum = "AWSGlue.GetDevEndpoint"
)


type GetDevEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetDevEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetDevEndpointRequest struct {
    Headers GetDevEndpointHeaders 
    Request shared.GetDevEndpointRequest `request:"mediaType=application/json"`
    
}

type GetDevEndpointResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetDevEndpointResponse *shared.GetDevEndpointResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

