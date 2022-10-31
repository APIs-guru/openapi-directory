package operations

import (
"openapi/pkg/models/shared")


type TagCertificateAuthorityXAmzTargetEnum string

const (
    TagCertificateAuthorityXAmzTargetEnumAcmPrivateCaTagCertificateAuthority TagCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.TagCertificateAuthority"
)


type TagCertificateAuthorityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget TagCertificateAuthorityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type TagCertificateAuthorityRequest struct {
    Headers TagCertificateAuthorityHeaders 
    Request shared.TagCertificateAuthorityRequest `request:"mediaType=application/json"`
    
}

type TagCertificateAuthorityResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    InvalidTagException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TooManyTagsException *interface{} 
    
}

