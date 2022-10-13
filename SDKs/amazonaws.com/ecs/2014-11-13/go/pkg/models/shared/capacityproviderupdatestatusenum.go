package shared

type CapacityProviderUpdateStatusEnum string

const (
	CapacityProviderUpdateStatusEnumDeleteInProgress CapacityProviderUpdateStatusEnum = "DELETE_IN_PROGRESS"
	CapacityProviderUpdateStatusEnumDeleteComplete   CapacityProviderUpdateStatusEnum = "DELETE_COMPLETE"
	CapacityProviderUpdateStatusEnumDeleteFailed     CapacityProviderUpdateStatusEnum = "DELETE_FAILED"
	CapacityProviderUpdateStatusEnumUpdateInProgress CapacityProviderUpdateStatusEnum = "UPDATE_IN_PROGRESS"
	CapacityProviderUpdateStatusEnumUpdateComplete   CapacityProviderUpdateStatusEnum = "UPDATE_COMPLETE"
	CapacityProviderUpdateStatusEnumUpdateFailed     CapacityProviderUpdateStatusEnum = "UPDATE_FAILED"
)
