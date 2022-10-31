package operations



type UpdateProvisioningTemplatePathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
    
}

type UpdateProvisioningTemplateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateProvisioningTemplateRequestBodyPreProvisioningHook struct {
    PayloadVersion *string `json:"payloadVersion,omitempty"`
    TargetArn *string `json:"targetArn,omitempty"`
    
}

type UpdateProvisioningTemplateRequestBody struct {
    DefaultVersionID *int64 `json:"defaultVersionId,omitempty"`
    Description *string `json:"description,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    PreProvisioningHook *UpdateProvisioningTemplateRequestBodyPreProvisioningHook `json:"preProvisioningHook,omitempty"`
    ProvisioningRoleArn *string `json:"provisioningRoleArn,omitempty"`
    RemovePreProvisioningHook *bool `json:"removePreProvisioningHook,omitempty"`
    
}

type UpdateProvisioningTemplateRequest struct {
    PathParams UpdateProvisioningTemplatePathParams 
    Headers UpdateProvisioningTemplateHeaders 
    Request UpdateProvisioningTemplateRequestBody `request:"mediaType=application/json"`
    
}

type UpdateProvisioningTemplateResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateProvisioningTemplateResponse map[string]interface{} 
    
}

