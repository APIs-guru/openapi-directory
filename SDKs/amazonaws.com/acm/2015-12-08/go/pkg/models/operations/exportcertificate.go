package operations

import (
"openapi/pkg/models/shared")


type ExportCertificateXAmzTargetEnum string

const (
    ExportCertificateXAmzTargetEnumCertificateManagerExportCertificate ExportCertificateXAmzTargetEnum = "CertificateManager.ExportCertificate"
)


type ExportCertificateHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ExportCertificateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ExportCertificateRequest struct {
    Headers ExportCertificateHeaders 
    Request shared.ExportCertificateRequest `request:"mediaType=application/json"`
    
}

type ExportCertificateResponse struct {
    ContentType string 
    ExportCertificateResponse *shared.ExportCertificateResponse 
    InvalidArnException *interface{} 
    RequestInProgressException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

