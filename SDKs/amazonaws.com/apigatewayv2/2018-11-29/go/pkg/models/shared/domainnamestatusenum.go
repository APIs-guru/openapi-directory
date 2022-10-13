package shared

type DomainNameStatusEnum string

const (
	DomainNameStatusEnumAvailable                    DomainNameStatusEnum = "AVAILABLE"
	DomainNameStatusEnumUpdating                     DomainNameStatusEnum = "UPDATING"
	DomainNameStatusEnumPendingCertificateReimport   DomainNameStatusEnum = "PENDING_CERTIFICATE_REIMPORT"
	DomainNameStatusEnumPendingOwnershipVerification DomainNameStatusEnum = "PENDING_OWNERSHIP_VERIFICATION"
)
