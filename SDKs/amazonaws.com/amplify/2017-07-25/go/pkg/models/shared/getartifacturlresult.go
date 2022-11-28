package shared

// GetArtifactURLResult
//
//	Returns the result structure for the get artifact request.
type GetArtifactURLResult struct {
	ArtifactID  string `json:"artifactId"`
	ArtifactURL string `json:"artifactUrl"`
}
