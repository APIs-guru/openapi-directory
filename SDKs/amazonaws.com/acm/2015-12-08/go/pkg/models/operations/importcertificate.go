package operations

import (
"openapi/pkg/models/shared")


type ImportCertificateXAmzTargetEnum string

const (
    ImportCertificateXAmzTargetEnumCertificateManagerImportCertificate ImportCertificateXAmzTargetEnum = "CertificateManager.ImportCertificate"
)


type ImportCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ImportCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ImportCertificateRequest struct {
    Headers ImportCertificateHeaders 
    Request shared.ImportCertificateRequest `request:"mediaType=application/json"`
    
}

type ImportCertificateResponse struct {
    ContentType string 
    ImportCertificateResponse *shared.ImportCertificateResponse 
    InvalidArnException *interface{} 
    InvalidParameterException *interface{} 
    InvalidTagException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    TagPolicyException *interface{} 
    TooManyTagsException *interface{} 
    
}

