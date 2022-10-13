package shared

type SourceDetail struct {
	EventSource               *EventSourceEnum               `json:"EventSource"`
	MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency"`
	MessageType               *MessageTypeEnum               `json:"MessageType"`
}
