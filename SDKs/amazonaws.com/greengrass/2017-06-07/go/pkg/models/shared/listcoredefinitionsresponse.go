package shared

type ListCoreDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions"`
	NextToken   *string                 `json:"NextToken"`
}
