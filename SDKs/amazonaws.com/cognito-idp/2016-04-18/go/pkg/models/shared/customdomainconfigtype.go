package shared

// CustomDomainConfigType
// The configuration for a custom domain that hosts the sign-up and sign-in webpages for your application.
type CustomDomainConfigType struct {
	CertificateArn string `json:"CertificateArn"`
}
