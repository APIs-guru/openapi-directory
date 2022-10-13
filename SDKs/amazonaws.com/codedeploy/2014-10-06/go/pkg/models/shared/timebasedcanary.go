package shared

type TimeBasedCanary struct {
	CanaryInterval   *int64 `json:"canaryInterval"`
	CanaryPercentage *int64 `json:"canaryPercentage"`
}
