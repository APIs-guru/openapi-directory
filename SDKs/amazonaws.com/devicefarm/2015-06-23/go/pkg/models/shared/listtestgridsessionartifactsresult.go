package shared

type ListTestGridSessionArtifactsResult struct {
	Artifacts []TestGridSessionArtifact `json:"artifacts"`
	NextToken *string                   `json:"nextToken"`
}
