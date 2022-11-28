package shared

type DescribeTargetGroupsOutput struct {
	NextMarker   *string
	TargetGroups []TargetGroup
}
