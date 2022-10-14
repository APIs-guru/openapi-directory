package shared

type ListConnectorDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken,omitempty"`
	Versions  []VersionInformation `json:"Versions,omitempty"`
}
