package shared

type Artifact struct {
	Arn       *string           `json:"arn"`
	Extension *string           `json:"extension"`
	Name      *string           `json:"name"`
	Type      *ArtifactTypeEnum `json:"type"`
	URL       *string           `json:"url"`
}
