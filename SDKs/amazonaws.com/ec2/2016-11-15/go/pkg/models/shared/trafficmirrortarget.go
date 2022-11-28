package shared

// TrafficMirrorTarget
// Describes a Traffic Mirror target.
type TrafficMirrorTarget struct {
	Description            *string
	NetworkInterfaceID     *string
	NetworkLoadBalancerArn *string
	OwnerID                *string
	Tags                   []Tag
	TrafficMirrorTargetID  *string
	Type                   *TrafficMirrorTargetTypeEnum
}
