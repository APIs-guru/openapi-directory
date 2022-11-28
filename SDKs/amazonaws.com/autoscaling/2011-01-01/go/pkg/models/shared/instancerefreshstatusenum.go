package shared

type InstanceRefreshStatusEnum string

const (
	InstanceRefreshStatusEnumPending    InstanceRefreshStatusEnum = "Pending"
	InstanceRefreshStatusEnumInProgress InstanceRefreshStatusEnum = "InProgress"
	InstanceRefreshStatusEnumSuccessful InstanceRefreshStatusEnum = "Successful"
	InstanceRefreshStatusEnumFailed     InstanceRefreshStatusEnum = "Failed"
	InstanceRefreshStatusEnumCancelling InstanceRefreshStatusEnum = "Cancelling"
	InstanceRefreshStatusEnumCancelled  InstanceRefreshStatusEnum = "Cancelled"
)
