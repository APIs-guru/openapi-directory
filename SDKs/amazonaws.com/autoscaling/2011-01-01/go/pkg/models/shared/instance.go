package shared

// Instance
// Describes an EC2 instance.
type Instance struct {
	AvailabilityZone        string
	HealthStatus            string
	InstanceID              string
	InstanceType            *string
	LaunchConfigurationName *string
	LaunchTemplate          *LaunchTemplateSpecification
	LifecycleState          LifecycleStateEnum
	ProtectedFromScaleIn    bool
	WeightedCapacity        *string
}
