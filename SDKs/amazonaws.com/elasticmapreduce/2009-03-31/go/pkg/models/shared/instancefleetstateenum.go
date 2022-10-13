package shared

type InstanceFleetStateEnum string

const (
	InstanceFleetStateEnumProvisioning  InstanceFleetStateEnum = "PROVISIONING"
	InstanceFleetStateEnumBootstrapping InstanceFleetStateEnum = "BOOTSTRAPPING"
	InstanceFleetStateEnumRunning       InstanceFleetStateEnum = "RUNNING"
	InstanceFleetStateEnumResizing      InstanceFleetStateEnum = "RESIZING"
	InstanceFleetStateEnumSuspended     InstanceFleetStateEnum = "SUSPENDED"
	InstanceFleetStateEnumTerminating   InstanceFleetStateEnum = "TERMINATING"
	InstanceFleetStateEnumTerminated    InstanceFleetStateEnum = "TERMINATED"
)
