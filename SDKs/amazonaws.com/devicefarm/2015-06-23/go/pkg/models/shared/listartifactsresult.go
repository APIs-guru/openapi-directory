package shared

type ListArtifactsResult struct {
	Artifacts []Artifact `json:"artifacts,omitempty"`
	NextToken *string    `json:"nextToken,omitempty"`
}
