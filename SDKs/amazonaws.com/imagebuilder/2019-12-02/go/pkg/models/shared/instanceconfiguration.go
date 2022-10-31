package shared

type InstanceConfiguration struct {
	BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings,omitempty"`
	Image               *string                      `json:"image,omitempty"`
}
