package shared



type ParameterizedStatement struct {
    Parameters []AttributeValue `json:"Parameters,omitempty"`
    Statement string `json:"Statement"`
    
}

