package shared

// InstanceBlockDeviceMapping
// Describes a block device mapping.
type InstanceBlockDeviceMapping struct {
	DeviceName *string
	Ebs        *EbsInstanceBlockDevice
}
