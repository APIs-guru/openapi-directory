package shared

type CreateCertificateAuthorityAuditReportResponse struct {
	AuditReportID *string `json:"AuditReportId,omitempty"`
	S3Key         *string `json:"S3Key,omitempty"`
}
