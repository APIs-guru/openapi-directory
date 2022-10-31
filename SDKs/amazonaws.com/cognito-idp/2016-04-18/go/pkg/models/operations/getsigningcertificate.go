package operations

import (
"openapi/pkg/models/shared")


type GetSigningCertificateXAmzTargetEnum string

const (
    GetSigningCertificateXAmzTargetEnumAwsCognitoIdentityProviderServiceGetSigningCertificate GetSigningCertificateXAmzTargetEnum = "AWSCognitoIdentityProviderService.GetSigningCertificate"
)


type GetSigningCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetSigningCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetSigningCertificateRequest struct {
    Headers GetSigningCertificateHeaders 
    Request shared.GetSigningCertificateRequest `request:"mediaType=application/json"`
    
}

type GetSigningCertificateResponse struct {
    ContentType string 
    GetSigningCertificateResponse *shared.GetSigningCertificateResponse 
    InternalErrorException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

