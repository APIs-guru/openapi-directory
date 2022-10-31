package operations

import (
"openapi/pkg/models/shared")


type RenewCertificateXAmzTargetEnum string

const (
    RenewCertificateXAmzTargetEnumCertificateManagerRenewCertificate RenewCertificateXAmzTargetEnum = "CertificateManager.RenewCertificate"
)


type RenewCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RenewCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RenewCertificateRequest struct {
    Headers RenewCertificateHeaders 
    Request shared.RenewCertificateRequest `request:"mediaType=application/json"`
    
}

type RenewCertificateResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

