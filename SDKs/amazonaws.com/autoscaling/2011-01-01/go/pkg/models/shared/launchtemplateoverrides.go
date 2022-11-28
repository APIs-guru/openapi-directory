package shared

// LaunchTemplateOverrides
// Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 40. The maximum number of distinct launch templates you can define for an Auto Scaling group is 20. For more information about configuring overrides, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
type LaunchTemplateOverrides struct {
	InstanceType                *string
	LaunchTemplateSpecification *LaunchTemplateSpecification
	WeightedCapacity            *string
}
