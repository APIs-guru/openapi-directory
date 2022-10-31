package operations

import (
"openapi/pkg/models/shared")

type CreateControlHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateControlRequestBody struct {
    ActionPlanInstructions *string `json:"actionPlanInstructions,omitempty"`
    ActionPlanTitle *string `json:"actionPlanTitle,omitempty"`
    ControlMappingSources []shared.CreateControlMappingSource `json:"controlMappingSources"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    TestingInformation *string `json:"testingInformation,omitempty"`
    
}

type CreateControlRequest struct {
    Headers CreateControlHeaders 
    Request CreateControlRequestBody `request:"mediaType=application/json"`
    
}

type CreateControlResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateControlResponse *shared.CreateControlResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

