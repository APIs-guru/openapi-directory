package shared



type SourceDetail struct {
    EventSource *EventSourceEnum `json:"EventSource,omitempty"`
    MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency,omitempty"`
    MessageType *MessageTypeEnum `json:"MessageType,omitempty"`
    
}

