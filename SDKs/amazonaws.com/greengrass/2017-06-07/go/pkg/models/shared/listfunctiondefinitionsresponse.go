package shared

type ListFunctionDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions"`
	NextToken   *string                 `json:"NextToken"`
}
