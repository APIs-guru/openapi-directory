package operations

import (
"openapi/pkg/models/shared")


type IssueCertificateXAmzTargetEnum string

const (
    IssueCertificateXAmzTargetEnumAcmPrivateCaIssueCertificate IssueCertificateXAmzTargetEnum = "ACMPrivateCA.IssueCertificate"
)


type IssueCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget IssueCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type IssueCertificateRequest struct {
    Headers IssueCertificateHeaders 
    Request shared.IssueCertificateRequest `request:"mediaType=application/json"`
    
}

type IssueCertificateResponse struct {
    ContentType string 
    InvalidArgsException *interface{} 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    IssueCertificateResponse *shared.IssueCertificateResponse 
    LimitExceededException *interface{} 
    MalformedCsrException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

