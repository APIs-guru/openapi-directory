package shared

// SnsTopicPublishAction
// Information required to publish the Amazon SNS message.
type SnsTopicPublishAction struct {
	Payload   *Payload `json:"payload,omitempty"`
	TargetArn string   `json:"targetArn"`
}
