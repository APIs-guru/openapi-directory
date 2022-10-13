package shared

type ResolvedArtifact struct {
	Identifier *string            `json:"identifier"`
	Location   *string            `json:"location"`
	Type       *ArtifactsTypeEnum `json:"type"`
}
