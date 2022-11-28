package shared

// DescribeConfigurationSetResponse
// Represents the details of a configuration set. Configuration sets enable you to publish email sending events. For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.
type DescribeConfigurationSetResponse struct {
	ConfigurationSet  *ConfigurationSet
	DeliveryOptions   *DeliveryOptions
	EventDestinations []EventDestination
	ReputationOptions *ReputationOptions
	TrackingOptions   *TrackingOptions
}
