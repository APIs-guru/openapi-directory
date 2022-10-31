package shared



type TriggerConfig struct {
    TriggerProperties *TriggerProperties `json:"TriggerProperties,omitempty"`
    TriggerType TriggerTypeEnum `json:"TriggerType"`
    
}

