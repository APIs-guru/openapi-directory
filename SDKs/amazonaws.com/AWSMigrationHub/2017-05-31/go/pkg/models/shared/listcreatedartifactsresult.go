package shared

type ListCreatedArtifactsResult struct {
	CreatedArtifactList []CreatedArtifact `json:"CreatedArtifactList,omitempty"`
	NextToken           *string           `json:"NextToken,omitempty"`
}
