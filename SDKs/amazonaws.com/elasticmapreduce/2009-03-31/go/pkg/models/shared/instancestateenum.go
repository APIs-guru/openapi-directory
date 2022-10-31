package shared

type InstanceStateEnum string

const (
	InstanceStateEnumAwaitingFulfillment InstanceStateEnum = "AWAITING_FULFILLMENT"
	InstanceStateEnumProvisioning        InstanceStateEnum = "PROVISIONING"
	InstanceStateEnumBootstrapping       InstanceStateEnum = "BOOTSTRAPPING"
	InstanceStateEnumRunning             InstanceStateEnum = "RUNNING"
	InstanceStateEnumTerminated          InstanceStateEnum = "TERMINATED"
)
