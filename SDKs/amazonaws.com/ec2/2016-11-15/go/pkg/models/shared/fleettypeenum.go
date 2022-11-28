package shared

type FleetTypeEnum string

const (
	FleetTypeEnumRequest  FleetTypeEnum = "request"
	FleetTypeEnumMaintain FleetTypeEnum = "maintain"
	FleetTypeEnumInstant  FleetTypeEnum = "instant"
)
