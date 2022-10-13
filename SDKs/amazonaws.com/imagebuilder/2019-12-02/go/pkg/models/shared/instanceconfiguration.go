package shared

type InstanceConfiguration struct {
	BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings"`
	Image               *string                      `json:"image"`
}
