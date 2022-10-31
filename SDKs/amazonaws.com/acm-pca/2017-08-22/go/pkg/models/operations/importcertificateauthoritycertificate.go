package operations

import (
"openapi/pkg/models/shared")


type ImportCertificateAuthorityCertificateXAmzTargetEnum string

const (
    ImportCertificateAuthorityCertificateXAmzTargetEnumAcmPrivateCaImportCertificateAuthorityCertificate ImportCertificateAuthorityCertificateXAmzTargetEnum = "ACMPrivateCA.ImportCertificateAuthorityCertificate"
)


type ImportCertificateAuthorityCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ImportCertificateAuthorityCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ImportCertificateAuthorityCertificateRequest struct {
    Headers ImportCertificateAuthorityCertificateHeaders 
    Request shared.ImportCertificateAuthorityCertificateRequest `request:"mediaType=application/json"`
    
}

type ImportCertificateAuthorityCertificateResponse struct {
    CertificateMismatchException *interface{} 
    ConcurrentModificationException *interface{} 
    ContentType string 
    InvalidArnException *interface{} 
    InvalidRequestException *interface{} 
    InvalidStateException *interface{} 
    MalformedCertificateException *interface{} 
    RequestFailedException *interface{} 
    RequestInProgressException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

