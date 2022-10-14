package shared

type ListDeviceDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions,omitempty"`
	NextToken   *string                 `json:"NextToken,omitempty"`
}
