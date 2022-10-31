package shared

type RenewalStatusEnum string

const (
	RenewalStatusEnumPendingAutoRenewal RenewalStatusEnum = "PENDING_AUTO_RENEWAL"
	RenewalStatusEnumPendingValidation  RenewalStatusEnum = "PENDING_VALIDATION"
	RenewalStatusEnumSuccess            RenewalStatusEnum = "SUCCESS"
	RenewalStatusEnumFailed             RenewalStatusEnum = "FAILED"
)
