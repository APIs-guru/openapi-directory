package shared

// AutoScalingInstanceDetails
// Describes an EC2 instance associated with an Auto Scaling group.
type AutoScalingInstanceDetails struct {
	AutoScalingGroupName    string
	AvailabilityZone        string
	HealthStatus            string
	InstanceID              string
	InstanceType            *string
	LaunchConfigurationName *string
	LaunchTemplate          *LaunchTemplateSpecification
	LifecycleState          string
	ProtectedFromScaleIn    bool
	WeightedCapacity        *string
}
