package shared

type AssociateEnclaveCertificateIamRoleResult struct {
	CertificateS3BucketName *string
	CertificateS3ObjectKey  *string
	EncryptionKmsKeyID      *string
}
