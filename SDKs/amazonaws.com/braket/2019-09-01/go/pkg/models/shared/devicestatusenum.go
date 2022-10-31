package shared

type DeviceStatusEnum string

const (
	DeviceStatusEnumOnline  DeviceStatusEnum = "ONLINE"
	DeviceStatusEnumOffline DeviceStatusEnum = "OFFLINE"
	DeviceStatusEnumRetired DeviceStatusEnum = "RETIRED"
)
