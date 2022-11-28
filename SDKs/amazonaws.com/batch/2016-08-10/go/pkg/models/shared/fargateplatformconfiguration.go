package shared

// FargatePlatformConfiguration
// The platform configuration for jobs that are running on Fargate resources. Jobs that run on EC2 resources must not specify this parameter.
type FargatePlatformConfiguration struct {
	PlatformVersion *string `json:"platformVersion,omitempty"`
}
