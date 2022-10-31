package operations

import (
"openapi/pkg/models/shared")


type DescribeCertificateAuthorityXAmzTargetEnum string

const (
    DescribeCertificateAuthorityXAmzTargetEnumAcmPrivateCaDescribeCertificateAuthority DescribeCertificateAuthorityXAmzTargetEnum = "ACMPrivateCA.DescribeCertificateAuthority"
)


type DescribeCertificateAuthorityHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCertificateAuthorityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCertificateAuthorityRequest struct {
    Headers DescribeCertificateAuthorityHeaders 
    Request shared.DescribeCertificateAuthorityRequest `request:"mediaType=application/json"`
    
}

type DescribeCertificateAuthorityResponse struct {
    ContentType string 
    DescribeCertificateAuthorityResponse *shared.DescribeCertificateAuthorityResponse 
    InvalidArnException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

