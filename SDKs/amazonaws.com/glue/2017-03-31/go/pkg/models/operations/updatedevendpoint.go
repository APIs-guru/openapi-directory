package operations

import (
"openapi/pkg/models/shared")


type UpdateDevEndpointXAmzTargetEnum string

const (
    UpdateDevEndpointXAmzTargetEnumAwsGlueUpdateDevEndpoint UpdateDevEndpointXAmzTargetEnum = "AWSGlue.UpdateDevEndpoint"
)


type UpdateDevEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateDevEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateDevEndpointRequest struct {
    Headers UpdateDevEndpointHeaders 
    Request shared.UpdateDevEndpointRequest `request:"mediaType=application/json"`
    
}

type UpdateDevEndpointResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    UpdateDevEndpointResponse map[string]interface{} 
    ValidationException *interface{} 
    
}

