package operations

import (
"openapi/pkg/models/shared")

type CreateDomainAssociationPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type CreateDomainAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateDomainAssociationRequestBody struct {
    AutoSubDomainCreationPatterns []string `json:"autoSubDomainCreationPatterns,omitempty"`
    AutoSubDomainIamRole *string `json:"autoSubDomainIAMRole,omitempty"`
    DomainName string `json:"domainName"`
    EnableAutoSubDomain *bool `json:"enableAutoSubDomain,omitempty"`
    SubDomainSettings []shared.SubDomainSetting `json:"subDomainSettings"`
    
}

type CreateDomainAssociationRequest struct {
    PathParams CreateDomainAssociationPathParams 
    Headers CreateDomainAssociationHeaders 
    Request CreateDomainAssociationRequestBody `request:"mediaType=application/json"`
    
}

type CreateDomainAssociationResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    CreateDomainAssociationResult *shared.CreateDomainAssociationResult 
    DependentServiceFailureException *interface{} 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnauthorizedException *interface{} 
    
}

