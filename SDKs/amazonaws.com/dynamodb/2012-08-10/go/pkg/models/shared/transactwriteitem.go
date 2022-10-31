package shared



type TransactWriteItem struct {
    ConditionCheck *ConditionCheck `json:"ConditionCheck,omitempty"`
    Delete *Delete `json:"Delete,omitempty"`
    Put *Put `json:"Put,omitempty"`
    Update *Update `json:"Update,omitempty"`
    
}

