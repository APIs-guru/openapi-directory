package shared

// ArtifactDetails
// Returns information about the details of an artifact.
type ArtifactDetails struct {
	MaximumCount int64 `json:"maximumCount"`
	MinimumCount int64 `json:"minimumCount"`
}
