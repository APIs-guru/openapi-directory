package shared

type AccountStatusEnum string

const (
	AccountStatusEnumActive            AccountStatusEnum = "ACTIVE"
	AccountStatusEnumInactive          AccountStatusEnum = "INACTIVE"
	AccountStatusEnumPendingActivation AccountStatusEnum = "PENDING_ACTIVATION"
)
