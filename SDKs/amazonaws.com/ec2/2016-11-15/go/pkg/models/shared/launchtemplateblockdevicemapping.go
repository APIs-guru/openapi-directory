package shared

// LaunchTemplateBlockDeviceMapping
// Describes a block device mapping.
type LaunchTemplateBlockDeviceMapping struct {
	DeviceName  *string
	Ebs         *LaunchTemplateEbsBlockDevice
	NoDevice    *string
	VirtualName *string
}
