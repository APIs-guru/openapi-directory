package shared

type FleetEventTypeEnum string

const (
	FleetEventTypeEnumInstanceChange FleetEventTypeEnum = "instance-change"
	FleetEventTypeEnumFleetChange    FleetEventTypeEnum = "fleet-change"
	FleetEventTypeEnumServiceError   FleetEventTypeEnum = "service-error"
)
