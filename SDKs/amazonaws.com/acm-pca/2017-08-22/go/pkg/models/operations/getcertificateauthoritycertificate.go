package operations

import (
"openapi/pkg/models/shared")


type GetCertificateAuthorityCertificateXAmzTargetEnum string

const (
    GetCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaGetCertificateAuthorityCertificate GetCertificateAuthorityCertificateXAmzTargetEnum = "ACMPrivateCA.GetCertificateAuthorityCertificate"
)


type GetCertificateAuthorityCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetCertificateAuthorityCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetCertificateAuthorityCertificateRequest struct {
    Headers GetCertificateAuthorityCertificateHeaders 
    Request shared.GetCertificateAuthorityCertificateRequest `request:"mediaType=application/json"`
    
}

type GetCertificateAuthorityCertificateResponse struct {
    ContentType string 
    GetCertificateAuthorityCertificateResponse *shared.GetCertificateAuthorityCertificateResponse 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

