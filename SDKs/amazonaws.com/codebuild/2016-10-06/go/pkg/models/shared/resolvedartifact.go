package shared

type ResolvedArtifact struct {
	Identifier *string            `json:"identifier,omitempty"`
	Location   *string            `json:"location,omitempty"`
	Type       *ArtifactsTypeEnum `json:"type,omitempty"`
}
