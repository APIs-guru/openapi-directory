package shared

// TargetGroup
// Information about a target group.
type TargetGroup struct {
	HealthCheckEnabled         *bool
	HealthCheckIntervalSeconds *int64
	HealthCheckPath            *string
	HealthCheckPort            *string
	HealthCheckProtocol        *ProtocolEnumEnum
	HealthCheckTimeoutSeconds  *int64
	HealthyThresholdCount      *int64
	LoadBalancerArns           []string
	Matcher                    *Matcher
	Port                       *int64
	Protocol                   *ProtocolEnumEnum
	ProtocolVersion            *string
	TargetGroupArn             *string
	TargetGroupName            *string
	TargetType                 *TargetTypeEnumEnum
	UnhealthyThresholdCount    *int64
	VpcID                      *string
}
