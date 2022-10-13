package shared

type ListControlsResponse struct {
	ControlMetadataList []ControlMetadata `json:"controlMetadataList"`
	NextToken           *string           `json:"nextToken"`
}
