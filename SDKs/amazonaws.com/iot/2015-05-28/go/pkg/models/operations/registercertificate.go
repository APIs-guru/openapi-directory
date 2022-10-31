package operations

import (
"openapi/pkg/models/shared")

type RegisterCertificateQueryParams struct {
    SetAsActive *bool `queryParam:"style=form,explode=true,name=setAsActive"`
    
}

type RegisterCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type RegisterCertificateRequestBodyStatusEnum string

const (
    RegisterCertificateRequestBodyStatusEnumActive RegisterCertificateRequestBodyStatusEnum = "ACTIVE"
RegisterCertificateRequestBodyStatusEnumInactive RegisterCertificateRequestBodyStatusEnum = "INACTIVE"
RegisterCertificateRequestBodyStatusEnumRevoked RegisterCertificateRequestBodyStatusEnum = "REVOKED"
RegisterCertificateRequestBodyStatusEnumPendingTransfer RegisterCertificateRequestBodyStatusEnum = "PENDING_TRANSFER"
RegisterCertificateRequestBodyStatusEnumRegisterInactive RegisterCertificateRequestBodyStatusEnum = "REGISTER_INACTIVE"
RegisterCertificateRequestBodyStatusEnumPendingActivation RegisterCertificateRequestBodyStatusEnum = "PENDING_ACTIVATION"
)


type RegisterCertificateRequestBody struct {
    CaCertificatePem *string `json:"caCertificatePem,omitempty"`
    CertificatePem string `json:"certificatePem"`
    Status *RegisterCertificateRequestBodyStatusEnum `json:"status,omitempty"`
    
}

type RegisterCertificateRequest struct {
    QueryParams RegisterCertificateQueryParams 
    Headers RegisterCertificateHeaders 
    Request RegisterCertificateRequestBody `request:"mediaType=application/json"`
    
}

type RegisterCertificateResponse struct {
    CertificateConflictException *interface{} 
    CertificateStateException *interface{} 
    CertificateValidationException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    InvalidRequestException *interface{} 
    RegisterCertificateResponse *shared.RegisterCertificateResponse 
    ResourceAlreadyExistsException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UnauthorizedException *interface{} 
    
}

