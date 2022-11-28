package shared

type DescribeVolumesResult struct {
	NextToken *string
	Volumes   []Volume
}
