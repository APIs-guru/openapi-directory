package shared

type HealthCheckConfiguration struct {
	HealthyThreshold   *int64                   `json:"HealthyThreshold"`
	Interval           *int64                   `json:"Interval"`
	Path               *string                  `json:"Path"`
	Protocol           *HealthCheckProtocolEnum `json:"Protocol"`
	Timeout            *int64                   `json:"Timeout"`
	UnhealthyThreshold *int64                   `json:"UnhealthyThreshold"`
}
