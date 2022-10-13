package shared

type ListSubscriptionDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken"`
	Versions  []VersionInformation `json:"Versions"`
}
