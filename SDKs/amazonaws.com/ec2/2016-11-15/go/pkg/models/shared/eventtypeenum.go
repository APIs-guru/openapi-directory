package shared

type EventTypeEnum string

const (
	EventTypeEnumInstanceChange     EventTypeEnum = "instanceChange"
	EventTypeEnumFleetRequestChange EventTypeEnum = "fleetRequestChange"
	EventTypeEnumError              EventTypeEnum = "error"
	EventTypeEnumInformation        EventTypeEnum = "information"
)
