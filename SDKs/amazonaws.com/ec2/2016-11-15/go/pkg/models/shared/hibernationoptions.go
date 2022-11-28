package shared

// HibernationOptions
// Indicates whether your instance is configured for hibernation. This parameter is valid only if the instance meets the <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#hibernating-prerequisites">hibernation prerequisites</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon EC2 User Guide</i>.
type HibernationOptions struct {
	Configured *bool
}
