package shared

type ListDeviceDefinitionVersionsResponse struct {
	NextToken *string              `json:"NextToken,omitempty"`
	Versions  []VersionInformation `json:"Versions,omitempty"`
}
