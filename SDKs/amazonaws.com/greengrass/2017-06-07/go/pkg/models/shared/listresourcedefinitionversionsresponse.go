package shared

type ListResourceDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken"`
	Versions  []VersionInformation `json:"Versions"`
}
