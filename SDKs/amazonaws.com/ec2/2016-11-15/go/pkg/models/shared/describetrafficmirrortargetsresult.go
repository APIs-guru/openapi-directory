package shared

type DescribeTrafficMirrorTargetsResult struct {
	NextToken            *string
	TrafficMirrorTargets []TrafficMirrorTarget
}
