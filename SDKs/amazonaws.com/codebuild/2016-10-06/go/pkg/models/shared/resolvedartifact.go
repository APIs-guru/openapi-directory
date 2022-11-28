package shared

// ResolvedArtifact
// Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
type ResolvedArtifact struct {
	Identifier *string            `json:"identifier,omitempty"`
	Location   *string            `json:"location,omitempty"`
	Type       *ArtifactsTypeEnum `json:"type,omitempty"`
}
