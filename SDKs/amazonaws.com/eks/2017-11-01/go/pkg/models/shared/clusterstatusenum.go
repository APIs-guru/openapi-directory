package shared

type ClusterStatusEnum string

const (
	ClusterStatusEnumCreating ClusterStatusEnum = "CREATING"
	ClusterStatusEnumActive   ClusterStatusEnum = "ACTIVE"
	ClusterStatusEnumDeleting ClusterStatusEnum = "DELETING"
	ClusterStatusEnumFailed   ClusterStatusEnum = "FAILED"
	ClusterStatusEnumUpdating ClusterStatusEnum = "UPDATING"
	ClusterStatusEnumPending  ClusterStatusEnum = "PENDING"
)
