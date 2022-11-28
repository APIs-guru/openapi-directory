package shared

// LaunchTemplateEbsBlockDevice
// Describes a block device for an EBS volume.
type LaunchTemplateEbsBlockDevice struct {
	DeleteOnTermination *bool
	Encrypted           *bool
	Iops                *int64
	KmsKeyID            *string
	SnapshotID          *string
	Throughput          *int64
	VolumeSize          *int64
	VolumeType          *VolumeTypeEnum
}
