package shared

// BlockDeviceMapping
// Describes a block device mapping, which defines the EBS volumes and instance store volumes to attach to an instance at launch.
type BlockDeviceMapping struct {
	DeviceName  *string
	Ebs         *EbsBlockDevice
	NoDevice    *string
	VirtualName *string
}
