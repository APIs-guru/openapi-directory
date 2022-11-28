package shared

// ListArtifactsResult
//
//	The result structure for the list artifacts request.
type ListArtifactsResult struct {
	Artifacts []Artifact `json:"artifacts"`
	NextToken *string    `json:"nextToken,omitempty"`
}
