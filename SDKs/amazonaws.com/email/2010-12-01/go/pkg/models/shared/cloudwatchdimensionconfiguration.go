package shared

// CloudWatchDimensionConfiguration
// <p>Contains the dimension configuration to use when you publish email sending events to Amazon CloudWatch.</p> <p>For information about publishing email sending events to Amazon CloudWatch, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
type CloudWatchDimensionConfiguration struct {
	DefaultDimensionValue string
	DimensionName         string
	DimensionValueSource  DimensionValueSourceEnum
}
