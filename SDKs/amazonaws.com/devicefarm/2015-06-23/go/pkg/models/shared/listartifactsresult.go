package shared

type ListArtifactsResult struct {
	Artifacts []Artifact `json:"artifacts"`
	NextToken *string    `json:"nextToken"`
}
