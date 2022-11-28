package shared

// TrafficRoutingConfig
// The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
type TrafficRoutingConfig struct {
	TimeBasedCanary *TimeBasedCanary        `json:"timeBasedCanary,omitempty"`
	TimeBasedLinear *TimeBasedLinear        `json:"timeBasedLinear,omitempty"`
	Type            *TrafficRoutingTypeEnum `json:"type,omitempty"`
}
