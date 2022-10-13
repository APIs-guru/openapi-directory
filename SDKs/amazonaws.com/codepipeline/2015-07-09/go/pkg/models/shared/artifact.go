package shared

type Artifact struct {
	Location *ArtifactLocation `json:"location"`
	Name     *string           `json:"name"`
	Revision *string           `json:"revision"`
}
