package shared

type ListLoggerDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken"`
	Versions  []VersionInformation `json:"Versions"`
}
