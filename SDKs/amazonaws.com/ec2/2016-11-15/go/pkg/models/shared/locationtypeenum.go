package shared

type LocationTypeEnum string

const (
	LocationTypeEnumRegion             LocationTypeEnum = "region"
	LocationTypeEnumAvailabilityZone   LocationTypeEnum = "availability-zone"
	LocationTypeEnumAvailabilityZoneID LocationTypeEnum = "availability-zone-id"
)
