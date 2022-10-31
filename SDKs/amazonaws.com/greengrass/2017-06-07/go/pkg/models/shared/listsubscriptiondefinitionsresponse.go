package shared

type ListSubscriptionDefinitionsResponse struct {
	Definitions []DefinitionInformation `json:"Definitions,omitempty"`
	NextToken   *string                 `json:"NextToken,omitempty"`
}
