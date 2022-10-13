package shared

type UnsubscribeFromEventRequest struct {
	Event       InspectorEventEnum `json:"event"`
	ResourceArn string             `json:"resourceArn"`
	TopicArn    string             `json:"topicArn"`
}
