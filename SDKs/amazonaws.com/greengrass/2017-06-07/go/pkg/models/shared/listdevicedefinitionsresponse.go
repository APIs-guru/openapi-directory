package shared

type ListDeviceDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions"`
	NextToken   *string                 `json:"NextToken"`
}
