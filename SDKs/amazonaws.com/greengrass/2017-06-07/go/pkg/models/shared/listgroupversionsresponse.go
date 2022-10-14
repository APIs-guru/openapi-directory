package shared

type ListGroupVersionsResponse struct {
	NextToken *string              `json:"NextToken,omitempty"`
	Versions  []VersionInformation `json:"Versions,omitempty"`
}
