package operations

import (
"openapi/pkg/models/shared")

type CreateProvisioningTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateProvisioningTemplateRequestBodyPreProvisioningHook struct {
    PayloadVersion *string `json:"payloadVersion,omitempty"`
    TargetArn *string `json:"targetArn,omitempty"`
    
}

type CreateProvisioningTemplateRequestBody struct {
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    PreProvisioningHook *CreateProvisioningTemplateRequestBodyPreProvisioningHook `json:"preProvisioningHook,omitempty"`
    ProvisioningRoleArn string `json:"provisioningRoleArn"`
    Tags []shared.Tag `json:"tags,omitempty"`
    TemplateBody string `json:"templateBody"`
    TemplateName string `json:"templateName"`
    
}

type CreateProvisioningTemplateRequest struct {
    Headers CreateProvisioningTemplateHeaders 
    Request CreateProvisioningTemplateRequestBody `request:"mediaType=application/json"`
    
}

type CreateProvisioningTemplateResponse struct {
    ContentType string 
    CreateProvisioningTemplateResponse *shared.CreateProvisioningTemplateResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ResourceAlreadyExistsException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

