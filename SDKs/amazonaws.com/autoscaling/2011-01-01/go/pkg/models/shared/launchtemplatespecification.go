package shared

// LaunchTemplateSpecification
// Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
type LaunchTemplateSpecification struct {
	LaunchTemplateID   *string
	LaunchTemplateName *string
	Version            *string
}
