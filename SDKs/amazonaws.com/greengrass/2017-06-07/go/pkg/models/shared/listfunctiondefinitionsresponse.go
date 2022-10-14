package shared

type ListFunctionDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions,omitempty"`
	NextToken   *string                 `json:"NextToken,omitempty"`
}
