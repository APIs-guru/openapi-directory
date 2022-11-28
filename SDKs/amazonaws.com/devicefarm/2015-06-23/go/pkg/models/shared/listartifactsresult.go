package shared

// ListArtifactsResult
// Represents the result of a list artifacts operation.
type ListArtifactsResult struct {
	Artifacts []Artifact `json:"artifacts,omitempty"`
	NextToken *string    `json:"nextToken,omitempty"`
}
