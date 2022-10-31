package operations

import (
"openapi/pkg/models/shared")


type UntagCertificateAuthorityXAmzTargetEnum string

const (
    UntagCertificateAuthorityXAmzTargetEnumAcmPrivateCaUntagCertificateAuthority UntagCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.UntagCertificateAuthority"
)


type UntagCertificateAuthorityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UntagCertificateAuthorityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UntagCertificateAuthorityRequest struct {
    Headers UntagCertificateAuthorityHeaders 
    Request shared.UntagCertificateAuthorityRequest `request:"mediaType=application/json"`
    
}

type UntagCertificateAuthorityResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    InvalidTagException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

