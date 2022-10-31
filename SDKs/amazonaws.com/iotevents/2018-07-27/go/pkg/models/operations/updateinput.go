package operations

import (
"openapi/pkg/models/shared")

type UpdateInputPathParams struct {
    InputName string `pathParam:"style=simple,explode=false,name=inputName"`
    
}

type UpdateInputHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateInputRequestBodyInputDefinition struct {
    Attributes []shared.Attribute `json:"attributes,omitempty"`
    
}

type UpdateInputRequestBody struct {
    InputDefinition UpdateInputRequestBodyInputDefinition `json:"inputDefinition"`
    InputDescription *string `json:"inputDescription,omitempty"`
    
}

type UpdateInputRequest struct {
    PathParams UpdateInputPathParams 
    Headers UpdateInputHeaders 
    Request UpdateInputRequestBody `request:"mediaType=application/json"`
    
}

type UpdateInputResponse struct {
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceInUseException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateInputResponse *shared.UpdateInputResponse 
    
}

