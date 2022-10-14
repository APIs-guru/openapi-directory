package shared

type ListFunctionDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken,omitempty"`
	Versions  []VersionInformation `json:"Versions,omitempty"`
}
