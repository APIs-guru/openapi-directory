package shared

type Projection struct {
	NonKeyAttributes []string            `json:"NonKeyAttributes,omitempty"`
	ProjectionType   *ProjectionTypeEnum `json:"ProjectionType,omitempty"`
}
