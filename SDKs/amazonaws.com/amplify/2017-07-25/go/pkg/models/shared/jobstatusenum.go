package shared

type JobStatusEnum string

const (
	JobStatusEnumPending      JobStatusEnum = "PENDING"
	JobStatusEnumProvisioning JobStatusEnum = "PROVISIONING"
	JobStatusEnumRunning      JobStatusEnum = "RUNNING"
	JobStatusEnumFailed       JobStatusEnum = "FAILED"
	JobStatusEnumSucceed      JobStatusEnum = "SUCCEED"
	JobStatusEnumCancelling   JobStatusEnum = "CANCELLING"
	JobStatusEnumCancelled    JobStatusEnum = "CANCELLED"
)
