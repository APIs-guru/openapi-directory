package shared

// BlockDeviceMapping
// Describes a block device mapping.
type BlockDeviceMapping struct {
	DeviceName  string
	Ebs         *Ebs
	NoDevice    *bool
	VirtualName *string
}
