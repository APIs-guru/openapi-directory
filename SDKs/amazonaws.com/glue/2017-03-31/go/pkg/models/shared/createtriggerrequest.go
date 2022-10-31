package shared



type CreateTriggerRequest struct {
    Actions []Action `json:"Actions"`
    Description *string `json:"Description,omitempty"`
    EventBatchingCondition *EventBatchingCondition `json:"EventBatchingCondition,omitempty"`
    Name string `json:"Name"`
    Predicate *Predicate `json:"Predicate,omitempty"`
    Schedule *string `json:"Schedule,omitempty"`
    StartOnCreation *bool `json:"StartOnCreation,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    Type TriggerTypeEnum `json:"Type"`
    WorkflowName *string `json:"WorkflowName,omitempty"`
    
}

