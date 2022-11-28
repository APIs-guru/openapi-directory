package shared

// EbsBlockDevice
// Describes a block device for an EBS volume.
type EbsBlockDevice struct {
	DeleteOnTermination *bool
	Encrypted           *bool
	Iops                *int64
	KmsKeyID            *string
	OutpostArn          *string
	SnapshotID          *string
	Throughput          *int64
	VolumeSize          *int64
	VolumeType          *VolumeTypeEnum
}
