package shared

type ListConnectorDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions"`
	NextToken   *string                 `json:"NextToken"`
}
