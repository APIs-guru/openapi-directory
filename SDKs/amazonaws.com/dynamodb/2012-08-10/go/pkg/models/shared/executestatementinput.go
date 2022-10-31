package shared



type ExecuteStatementInput struct {
    ConsistentRead *bool `json:"ConsistentRead,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    Parameters []AttributeValue `json:"Parameters,omitempty"`
    Statement string `json:"Statement"`
    
}

