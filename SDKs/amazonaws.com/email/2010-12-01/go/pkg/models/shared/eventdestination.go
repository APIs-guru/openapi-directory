package shared

// EventDestination
// <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
type EventDestination struct {
	CloudWatchDestination      *CloudWatchDestination
	Enabled                    *bool
	KinesisFirehoseDestination *KinesisFirehoseDestination
	MatchingEventTypes         []EventTypeEnum
	Name                       string
	SnsDestination             *SnsDestination
}
