package shared




type DomainStatusEnum string

const (
    DomainStatusEnumPendingVerification DomainStatusEnum = "PENDING_VERIFICATION"
DomainStatusEnumInProgress DomainStatusEnum = "IN_PROGRESS"
DomainStatusEnumAvailable DomainStatusEnum = "AVAILABLE"
DomainStatusEnumPendingDeployment DomainStatusEnum = "PENDING_DEPLOYMENT"
DomainStatusEnumFailed DomainStatusEnum = "FAILED"
DomainStatusEnumCreating DomainStatusEnum = "CREATING"
DomainStatusEnumRequestingCertificate DomainStatusEnum = "REQUESTING_CERTIFICATE"
DomainStatusEnumUpdating DomainStatusEnum = "UPDATING"
)


