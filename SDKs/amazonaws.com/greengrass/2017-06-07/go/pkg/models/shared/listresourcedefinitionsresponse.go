package shared



type ListResourceDefinitionsResponse struct {
    Definitions []DefinitionInformation `json:"Definitions,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

