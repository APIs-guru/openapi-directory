package shared

type BatchStateEnum string

const (
	BatchStateEnumSubmitted            BatchStateEnum = "submitted"
	BatchStateEnumActive               BatchStateEnum = "active"
	BatchStateEnumCancelled            BatchStateEnum = "cancelled"
	BatchStateEnumFailed               BatchStateEnum = "failed"
	BatchStateEnumCancelledRunning     BatchStateEnum = "cancelled_running"
	BatchStateEnumCancelledTerminating BatchStateEnum = "cancelled_terminating"
	BatchStateEnumModifying            BatchStateEnum = "modifying"
)
