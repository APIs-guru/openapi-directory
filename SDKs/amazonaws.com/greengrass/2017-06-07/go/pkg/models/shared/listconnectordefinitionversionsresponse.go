package shared

type ListConnectorDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken"`
	Versions  []VersionInformation `json:"Versions"`
}
