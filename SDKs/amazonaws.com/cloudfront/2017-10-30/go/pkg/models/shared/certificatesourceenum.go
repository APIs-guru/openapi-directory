package shared

type CertificateSourceEnum string

const (
	CertificateSourceEnumCloudfront CertificateSourceEnum = "cloudfront"
	CertificateSourceEnumIam        CertificateSourceEnum = "iam"
	CertificateSourceEnumAcm        CertificateSourceEnum = "acm"
)
