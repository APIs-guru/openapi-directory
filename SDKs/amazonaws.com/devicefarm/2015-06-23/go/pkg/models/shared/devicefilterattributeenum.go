package shared

type DeviceFilterAttributeEnum string

const (
	DeviceFilterAttributeEnumArn                 DeviceFilterAttributeEnum = "ARN"
	DeviceFilterAttributeEnumPlatform            DeviceFilterAttributeEnum = "PLATFORM"
	DeviceFilterAttributeEnumOsVersion           DeviceFilterAttributeEnum = "OS_VERSION"
	DeviceFilterAttributeEnumModel               DeviceFilterAttributeEnum = "MODEL"
	DeviceFilterAttributeEnumAvailability        DeviceFilterAttributeEnum = "AVAILABILITY"
	DeviceFilterAttributeEnumFormFactor          DeviceFilterAttributeEnum = "FORM_FACTOR"
	DeviceFilterAttributeEnumManufacturer        DeviceFilterAttributeEnum = "MANUFACTURER"
	DeviceFilterAttributeEnumRemoteAccessEnabled DeviceFilterAttributeEnum = "REMOTE_ACCESS_ENABLED"
	DeviceFilterAttributeEnumRemoteDebugEnabled  DeviceFilterAttributeEnum = "REMOTE_DEBUG_ENABLED"
	DeviceFilterAttributeEnumInstanceArn         DeviceFilterAttributeEnum = "INSTANCE_ARN"
	DeviceFilterAttributeEnumInstanceLabels      DeviceFilterAttributeEnum = "INSTANCE_LABELS"
	DeviceFilterAttributeEnumFleetType           DeviceFilterAttributeEnum = "FLEET_TYPE"
)
