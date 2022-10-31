package shared




type CertificateStatusEnum string

const (
    CertificateStatusEnumActive CertificateStatusEnum = "ACTIVE"
CertificateStatusEnumInactive CertificateStatusEnum = "INACTIVE"
CertificateStatusEnumRevoked CertificateStatusEnum = "REVOKED"
CertificateStatusEnumPendingTransfer CertificateStatusEnum = "PENDING_TRANSFER"
CertificateStatusEnumRegisterInactive CertificateStatusEnum = "REGISTER_INACTIVE"
CertificateStatusEnumPendingActivation CertificateStatusEnum = "PENDING_ACTIVATION"
)


