package shared

type TimeBasedCanary struct {
	CanaryInterval   *int64 `json:"canaryInterval,omitempty"`
	CanaryPercentage *int64 `json:"canaryPercentage,omitempty"`
}
