package operations

import (
"openapi/pkg/models/shared")

type UpdateDomainAssociationPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type UpdateDomainAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateDomainAssociationRequestBody struct {
    AutoSubDomainCreationPatterns []string `json:"autoSubDomainCreationPatterns,omitempty"`
    AutoSubDomainIamRole *string `json:"autoSubDomainIAMRole,omitempty"`
    EnableAutoSubDomain *bool `json:"enableAutoSubDomain,omitempty"`
    SubDomainSettings []shared.SubDomainSetting `json:"subDomainSettings"`
    
}

type UpdateDomainAssociationRequest struct {
    PathParams UpdateDomainAssociationPathParams 
    Headers UpdateDomainAssociationHeaders 
    Request UpdateDomainAssociationRequestBody `request:"mediaType=application/json"`
    
}

type UpdateDomainAssociationResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    UpdateDomainAssociationResult *shared.UpdateDomainAssociationResult 
    
}

