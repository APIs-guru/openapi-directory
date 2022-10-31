package shared



type CreateCertificateAuthorityAuditReportRequest struct {
    AuditReportResponseFormat AuditReportResponseFormatEnum `json:"AuditReportResponseFormat"`
    CertificateAuthorityArn string `json:"CertificateAuthorityArn"`
    S3BucketName string `json:"S3BucketName"`
    
}

