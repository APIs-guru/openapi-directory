package shared

type FleetTypeEnum string

const (
	FleetTypeEnumOnDemand FleetTypeEnum = "ON_DEMAND"
	FleetTypeEnumSpot     FleetTypeEnum = "SPOT"
)
