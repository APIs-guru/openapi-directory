package shared



type ListCoreDefinitionsResponse struct {
    Definitions []DefinitionInformation `json:"Definitions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

