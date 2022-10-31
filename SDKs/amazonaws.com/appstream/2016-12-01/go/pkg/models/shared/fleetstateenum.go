package shared

type FleetStateEnum string

const (
	FleetStateEnumStarting FleetStateEnum = "STARTING"
	FleetStateEnumRunning  FleetStateEnum = "RUNNING"
	FleetStateEnumStopping FleetStateEnum = "STOPPING"
	FleetStateEnumStopped  FleetStateEnum = "STOPPED"
)
