package shared

type HsmStatusEnum string

const (
	HsmStatusEnumPending     HsmStatusEnum = "PENDING"
	HsmStatusEnumRunning     HsmStatusEnum = "RUNNING"
	HsmStatusEnumUpdating    HsmStatusEnum = "UPDATING"
	HsmStatusEnumSuspended   HsmStatusEnum = "SUSPENDED"
	HsmStatusEnumTerminating HsmStatusEnum = "TERMINATING"
	HsmStatusEnumTerminated  HsmStatusEnum = "TERMINATED"
	HsmStatusEnumDegraded    HsmStatusEnum = "DEGRADED"
)
