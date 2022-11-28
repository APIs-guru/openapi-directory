package shared

// PublishFindingToSnsParams
// Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.
type PublishFindingToSnsParams struct {
	TopicArn string `json:"topicArn"`
}
