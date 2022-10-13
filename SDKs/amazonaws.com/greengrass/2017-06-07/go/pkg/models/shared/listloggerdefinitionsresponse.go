package shared

type ListLoggerDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions"`
	NextToken   *string                 `json:"NextToken"`
}
