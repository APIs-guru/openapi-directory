package shared

// TimeBasedCanary
// A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments. The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
type TimeBasedCanary struct {
	CanaryInterval   *int64 `json:"canaryInterval,omitempty"`
	CanaryPercentage *int64 `json:"canaryPercentage,omitempty"`
}
