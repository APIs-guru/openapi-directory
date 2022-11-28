package shared

// InstanceConfiguration
// Defines a custom source AMI and block device mapping configurations of an instance used for building and testing container images.
type InstanceConfiguration struct {
	BlockDeviceMappings []InstanceBlockDeviceMapping `json:"blockDeviceMappings,omitempty"`
	Image               *string                      `json:"image,omitempty"`
}
