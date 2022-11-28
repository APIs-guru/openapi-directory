package shared

type DescribeTrafficMirrorSessionsResult struct {
	NextToken             *string
	TrafficMirrorSessions []TrafficMirrorSession
}
