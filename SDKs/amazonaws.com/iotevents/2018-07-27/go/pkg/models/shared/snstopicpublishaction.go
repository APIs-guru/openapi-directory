package shared

type SnsTopicPublishAction struct {
	Payload   *Payload `json:"payload"`
	TargetArn string   `json:"targetArn"`
}
