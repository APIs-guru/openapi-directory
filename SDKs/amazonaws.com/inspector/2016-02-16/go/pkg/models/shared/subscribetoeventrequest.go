package shared

type SubscribeToEventRequest struct {
	Event       InspectorEventEnum `json:"event"`
	ResourceArn string             `json:"resourceArn"`
	TopicArn    string             `json:"topicArn"`
}
