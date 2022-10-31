package operations

import (
"openapi/pkg/models/shared")


type AddTagsToCertificateXAmzTargetEnum string

const (
    AddTagsToCertificateXAmzTargetEnumCertificateManagerAddTagsToCertificate AddTagsToCertificateXAmzTargetEnum = "CertificateManager.AddTagsToCertificate"
)


type AddTagsToCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget AddTagsToCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type AddTagsToCertificateRequest struct {
    Headers AddTagsToCertificateHeaders 
    Request shared.AddTagsToCertificateRequest `request:"mediaType=application/json"`
    
}

type AddTagsToCertificateResponse struct {
    ContentType string 
    InvalidArnException *interface{} 
    InvalidParameterException *interface{} 
    InvalidTagException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagPolicyException *interface{} 
    ThrottlingException *interface{} 
    TooManyTagsException *interface{} 
    
}

