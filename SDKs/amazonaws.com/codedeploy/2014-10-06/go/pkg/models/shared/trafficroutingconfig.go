package shared

type TrafficRoutingConfig struct {
	TimeBasedCanary *TimeBasedCanary        `json:"timeBasedCanary"`
	TimeBasedLinear *TimeBasedLinear        `json:"timeBasedLinear"`
	Type            *TrafficRoutingTypeEnum `json:"type"`
}
