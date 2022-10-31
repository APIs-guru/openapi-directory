package operations

import (
"openapi/pkg/models/shared")

type CreateProvisioningTemplateVersionPathParams struct {
    TemplateName string `pathParam:"style=simple,explode=false,name=templateName"`
    
}

type CreateProvisioningTemplateVersionQueryParams struct {
    SetAsDefault *bool `queryParam:"style=form,explode=true,name=setAsDefault"`
    
}

type CreateProvisioningTemplateVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateProvisioningTemplateVersionRequestBody struct {
    TemplateBody string `json:"templateBody"`
    
}

type CreateProvisioningTemplateVersionRequest struct {
    PathParams CreateProvisioningTemplateVersionPathParams 
    QueryParams CreateProvisioningTemplateVersionQueryParams 
    Headers CreateProvisioningTemplateVersionHeaders 
    Request CreateProvisioningTemplateVersionRequestBody `request:"mediaType=application/json"`
    
}

type CreateProvisioningTemplateVersionResponse struct {
    ConflictingResourceUpdateException *interface{} 
    ContentType string 
    CreateProvisioningTemplateVersionResponse *shared.CreateProvisioningTemplateVersionResponse 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    VersionsLimitExceededException *interface{} 
    
}

