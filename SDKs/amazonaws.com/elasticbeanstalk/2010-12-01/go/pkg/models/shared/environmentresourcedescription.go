package shared

// EnvironmentResourceDescription
// Describes the AWS resources in use by this environment. This data is live.
type EnvironmentResourceDescription struct {
	AutoScalingGroups    []AutoScalingGroup
	EnvironmentName      *string
	Instances            []Instance
	LaunchConfigurations []LaunchConfiguration
	LaunchTemplates      []LaunchTemplate
	LoadBalancers        []LoadBalancer
	Queues               []Queue
	Triggers             []Trigger
}
