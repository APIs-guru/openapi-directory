package shared



type ListConnectorDefinitionsResponse struct {
    Definitions []DefinitionInformation `json:"Definitions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

