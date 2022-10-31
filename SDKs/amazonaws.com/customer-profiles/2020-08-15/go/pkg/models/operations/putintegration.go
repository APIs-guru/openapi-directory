package operations

import (
"openapi/pkg/models/shared")

type PutIntegrationPathParams struct {
    DomainName string `pathParam:"style=simple,explode=false,name=DomainName"`
    
}

type PutIntegrationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutIntegrationRequestBodyFlowDefinition struct {
    Description *string `json:"Description,omitempty"`
    FlowName *string `json:"FlowName,omitempty"`
    KmsArn *string `json:"KmsArn,omitempty"`
    SourceFlowConfig *shared.SourceFlowConfig `json:"SourceFlowConfig,omitempty"`
    Tasks []shared.Task `json:"Tasks,omitempty"`
    TriggerConfig *shared.TriggerConfig `json:"TriggerConfig,omitempty"`
    
}

type PutIntegrationRequestBody struct {
    FlowDefinition *PutIntegrationRequestBodyFlowDefinition `json:"FlowDefinition,omitempty"`
    ObjectTypeName string `json:"ObjectTypeName"`
    Tags map[string]string `json:"Tags,omitempty"`
    URI *string `json:"Uri,omitempty"`
    
}

type PutIntegrationRequest struct {
    PathParams PutIntegrationPathParams 
    Headers PutIntegrationHeaders 
    Request PutIntegrationRequestBody `request:"mediaType=application/json"`
    
}

type PutIntegrationResponse struct {
    AccessDeniedException *interface{} 
    BadRequestException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    PutIntegrationResponse *shared.PutIntegrationResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

