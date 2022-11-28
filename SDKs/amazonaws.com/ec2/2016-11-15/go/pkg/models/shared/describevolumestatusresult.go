package shared

type DescribeVolumeStatusResult struct {
	NextToken      *string
	VolumeStatuses []VolumeStatusItem
}
