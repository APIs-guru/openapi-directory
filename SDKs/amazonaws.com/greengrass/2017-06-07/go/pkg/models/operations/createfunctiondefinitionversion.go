package operations

import (
"openapi/pkg/models/shared")

type CreateFunctionDefinitionVersionPathParams struct {
    FunctionDefinitionID string `pathParam:"style=simple,explode=false,name=FunctionDefinitionId"`
    
}

type CreateFunctionDefinitionVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmznClientToken *string `header:"style=simple,explode=false,name=X-Amzn-Client-Token"`
    
}

type CreateFunctionDefinitionVersionRequestBodyDefaultConfig struct {
    Execution *shared.FunctionDefaultExecutionConfig `json:"Execution,omitempty"`
    
}

type CreateFunctionDefinitionVersionRequestBody struct {
    DefaultConfig *CreateFunctionDefinitionVersionRequestBodyDefaultConfig `json:"DefaultConfig,omitempty"`
    Functions []shared.Function `json:"Functions,omitempty"`
    
}

type CreateFunctionDefinitionVersionRequest struct {
    PathParams CreateFunctionDefinitionVersionPathParams 
    Headers CreateFunctionDefinitionVersionHeaders 
    Request CreateFunctionDefinitionVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateFunctionDefinitionVersionResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateFunctionDefinitionVersionResponse *shared.CreateFunctionDefinitionVersionResponse 
    StatusCode int64 
    
}

