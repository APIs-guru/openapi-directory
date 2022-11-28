package shared

// ScalingParameters
// The desired instance type and desired number of replicas of each index partition.
type ScalingParameters struct {
	DesiredInstanceType     *PartitionInstanceTypeEnum
	DesiredPartitionCount   *int64
	DesiredReplicationCount *int64
}
