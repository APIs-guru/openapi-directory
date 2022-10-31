package shared



type Operator struct {
    Type *OperatorTypeEnum `json:"type,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

