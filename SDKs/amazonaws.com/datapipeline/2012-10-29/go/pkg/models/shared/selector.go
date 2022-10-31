package shared



type Selector struct {
    FieldName *string `json:"fieldName,omitempty"`
    Operator *Operator `json:"operator,omitempty"`
    
}

