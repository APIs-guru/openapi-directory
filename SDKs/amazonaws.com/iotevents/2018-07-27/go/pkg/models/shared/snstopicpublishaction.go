package shared

type SnsTopicPublishAction struct {
	Payload   *Payload `json:"payload,omitempty"`
	TargetArn string   `json:"targetArn"`
}
