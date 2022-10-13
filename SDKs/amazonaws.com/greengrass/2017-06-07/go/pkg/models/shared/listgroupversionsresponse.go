package shared

type ListGroupVersionsResponse struct {
	NextToken *string              `json:"NextToken"`
	Versions  []VersionInformation `json:"Versions"`
}
