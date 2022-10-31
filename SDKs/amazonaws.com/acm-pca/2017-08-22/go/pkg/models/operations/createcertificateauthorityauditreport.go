package operations

import (
"openapi/pkg/models/shared")


type CreateCertificateAuthorityAuditReportXAmzTargetEnum string

const (
    CreateCertificateAuthorityAuditReportXAmzTargetEnumAcmPrivateCaCreateCertificateAuthorityAuditReport CreateCertificateAuthorityAuditReportXAmzTargetEnum = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"
)


type CreateCertificateAuthorityAuditReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateCertificateAuthorityAuditReportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateCertificateAuthorityAuditReportRequest struct {
    Headers CreateCertificateAuthorityAuditReportHeaders 
    Request shared.CreateCertificateAuthorityAuditReportRequest `request:"mediaType=application/json"`
    
}

type CreateCertificateAuthorityAuditReportResponse struct {
    ContentType string 
    CreateCertificateAuthorityAuditReportResponse *shared.CreateCertificateAuthorityAuditReportResponse 
    InvalidArgsException *interface{} 
    InvalidArnException *interface{} 
    InvalidStateException *interface{} 
    RequestFailedException *interface{} 
    RequestInProgressException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

