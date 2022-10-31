package shared

import (
"time")

type DescribeCertificateAuthorityAuditReportResponse struct {
    AuditReportStatus *AuditReportStatusEnum `json:"AuditReportStatus,omitempty"`
    CreatedAt *time.Time `json:"CreatedAt,omitempty"`
    S3BucketName *string `json:"S3BucketName,omitempty"`
    S3Key *string `json:"S3Key,omitempty"`
    
}

