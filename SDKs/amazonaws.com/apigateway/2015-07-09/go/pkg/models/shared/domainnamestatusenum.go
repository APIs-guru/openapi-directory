package shared

type DomainNameStatusEnum string

const (
	DomainNameStatusEnumAvailable                    DomainNameStatusEnum = "AVAILABLE"
	DomainNameStatusEnumUpdating                     DomainNameStatusEnum = "UPDATING"
	DomainNameStatusEnumPending                      DomainNameStatusEnum = "PENDING"
	DomainNameStatusEnumPendingCertificateReimport   DomainNameStatusEnum = "PENDING_CERTIFICATE_REIMPORT"
	DomainNameStatusEnumPendingOwnershipVerification DomainNameStatusEnum = "PENDING_OWNERSHIP_VERIFICATION"
)
