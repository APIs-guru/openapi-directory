package shared

type Projection struct {
	NonKeyAttributes []string            `json:"NonKeyAttributes"`
	ProjectionType   *ProjectionTypeEnum `json:"ProjectionType"`
}
