package shared

// Artifact
// Represents the output of a test. Examples of artifacts include logs and screenshots.
type Artifact struct {
	Arn       *string           `json:"arn,omitempty"`
	Extension *string           `json:"extension,omitempty"`
	Name      *string           `json:"name,omitempty"`
	Type      *ArtifactTypeEnum `json:"type,omitempty"`
	URL       *string           `json:"url,omitempty"`
}
