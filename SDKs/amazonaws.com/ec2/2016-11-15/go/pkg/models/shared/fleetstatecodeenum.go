package shared

type FleetStateCodeEnum string

const (
	FleetStateCodeEnumSubmitted          FleetStateCodeEnum = "submitted"
	FleetStateCodeEnumActive             FleetStateCodeEnum = "active"
	FleetStateCodeEnumDeleted            FleetStateCodeEnum = "deleted"
	FleetStateCodeEnumFailed             FleetStateCodeEnum = "failed"
	FleetStateCodeEnumDeletedRunning     FleetStateCodeEnum = "deleted_running"
	FleetStateCodeEnumDeletedTerminating FleetStateCodeEnum = "deleted_terminating"
	FleetStateCodeEnumModifying          FleetStateCodeEnum = "modifying"
)
