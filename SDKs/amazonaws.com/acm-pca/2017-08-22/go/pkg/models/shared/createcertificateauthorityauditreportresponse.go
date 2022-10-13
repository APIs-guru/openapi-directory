package shared

type CreateCertificateAuthorityAuditReportResponse struct {
	AuditReportID *string `json:"AuditReportId"`
	S3Key         *string `json:"S3Key"`
}
