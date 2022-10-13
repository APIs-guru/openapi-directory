package shared

type DomainStatusEnum string

const (
	DomainStatusEnumPendingValidation DomainStatusEnum = "PENDING_VALIDATION"
	DomainStatusEnumSuccess           DomainStatusEnum = "SUCCESS"
	DomainStatusEnumFailed            DomainStatusEnum = "FAILED"
)
