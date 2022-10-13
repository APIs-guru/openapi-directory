package shared

import (
	"time"
)

type DescribeCertificateAuthorityAuditReportResponse struct {
	AuditReportStatus *AuditReportStatusEnum `json:"AuditReportStatus"`
	CreatedAt         *time.Time             `json:"CreatedAt"`
	S3BucketName      *string                `json:"S3BucketName"`
	S3Key             *string                `json:"S3Key"`
}
