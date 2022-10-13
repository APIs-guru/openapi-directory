package shared

type CloudHsmObjectStateEnum string

const (
	CloudHsmObjectStateEnumReady    CloudHsmObjectStateEnum = "READY"
	CloudHsmObjectStateEnumUpdating CloudHsmObjectStateEnum = "UPDATING"
	CloudHsmObjectStateEnumDegraded CloudHsmObjectStateEnum = "DEGRADED"
)
