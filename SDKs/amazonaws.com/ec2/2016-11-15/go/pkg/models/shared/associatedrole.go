package shared

// AssociatedRole
// Information about the associated IAM roles.
type AssociatedRole struct {
	AssociatedRoleArn       *string
	CertificateS3BucketName *string
	CertificateS3ObjectKey  *string
	EncryptionKmsKeyID      *string
}
