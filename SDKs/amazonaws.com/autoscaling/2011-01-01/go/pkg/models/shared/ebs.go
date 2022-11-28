package shared

// Ebs
// Describes information used to set up an Amazon EBS volume specified in a block device mapping.
type Ebs struct {
	DeleteOnTermination *bool
	Encrypted           *bool
	Iops                *int64
	SnapshotID          *string
	Throughput          *int64
	VolumeSize          *int64
	VolumeType          *string
}
