package shared




type CertificateStatusEnum string

const (
    CertificateStatusEnumPendingValidation CertificateStatusEnum = "PENDING_VALIDATION"
CertificateStatusEnumIssued CertificateStatusEnum = "ISSUED"
CertificateStatusEnumInactive CertificateStatusEnum = "INACTIVE"
CertificateStatusEnumExpired CertificateStatusEnum = "EXPIRED"
CertificateStatusEnumValidationTimedOut CertificateStatusEnum = "VALIDATION_TIMED_OUT"
CertificateStatusEnumRevoked CertificateStatusEnum = "REVOKED"
CertificateStatusEnumFailed CertificateStatusEnum = "FAILED"
)


