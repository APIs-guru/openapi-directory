package shared

type PartitionIndexStatusEnum string

const (
	PartitionIndexStatusEnumCreating PartitionIndexStatusEnum = "CREATING"
	PartitionIndexStatusEnumActive   PartitionIndexStatusEnum = "ACTIVE"
	PartitionIndexStatusEnumDeleting PartitionIndexStatusEnum = "DELETING"
	PartitionIndexStatusEnumFailed   PartitionIndexStatusEnum = "FAILED"
)
