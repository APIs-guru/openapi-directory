package shared

type CertificateAuthorityStatusEnum string

const (
	CertificateAuthorityStatusEnumCreating           CertificateAuthorityStatusEnum = "CREATING"
	CertificateAuthorityStatusEnumPendingCertificate CertificateAuthorityStatusEnum = "PENDING_CERTIFICATE"
	CertificateAuthorityStatusEnumActive             CertificateAuthorityStatusEnum = "ACTIVE"
	CertificateAuthorityStatusEnumDeleted            CertificateAuthorityStatusEnum = "DELETED"
	CertificateAuthorityStatusEnumDisabled           CertificateAuthorityStatusEnum = "DISABLED"
	CertificateAuthorityStatusEnumExpired            CertificateAuthorityStatusEnum = "EXPIRED"
	CertificateAuthorityStatusEnumFailed             CertificateAuthorityStatusEnum = "FAILED"
)
