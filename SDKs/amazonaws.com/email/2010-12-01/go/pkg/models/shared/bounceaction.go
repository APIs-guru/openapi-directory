package shared

// BounceAction
// <p>When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>For information about sending a bounce message in response to a received email, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-bounce.html">Amazon SES Developer Guide</a>.</p>
type BounceAction struct {
	Message       string
	Sender        string
	SMTPReplyCode string
	StatusCode    *string
	TopicArn      *string
}
