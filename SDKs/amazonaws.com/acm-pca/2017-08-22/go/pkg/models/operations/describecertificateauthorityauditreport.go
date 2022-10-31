package operations

import (
"openapi/pkg/models/shared")


type DescribeCertificateAuthorityAuditReportXAmzTargetEnum string

const (
    DescribeCertificateAuthorityAuditReportXAmzTargetEnumAcmPrivateCaDescribeCertificateAuthorityAuditReport DescribeCertificateAuthorityAuditReportXAmzTargetEnum = "ACMPrivateCA.DescribeCertificateAuthorityAuditReport"
)


type DescribeCertificateAuthorityAuditReportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeCertificateAuthorityAuditReportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeCertificateAuthorityAuditReportRequest struct {
    Headers DescribeCertificateAuthorityAuditReportHeaders 
    Request shared.DescribeCertificateAuthorityAuditReportRequest `request:"mediaType=application/json"`
    
}

type DescribeCertificateAuthorityAuditReportResponse struct {
    ContentType string 
    DescribeCertificateAuthorityAuditReportResponse *shared.DescribeCertificateAuthorityAuditReportResponse 
    InvalidArgsException *interface{} 
    InvalidArnException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

