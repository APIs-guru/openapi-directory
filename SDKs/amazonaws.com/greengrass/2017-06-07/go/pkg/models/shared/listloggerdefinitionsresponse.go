package shared

type ListLoggerDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions,omitempty"`
	NextToken   *string                 `json:"NextToken,omitempty"`
}
