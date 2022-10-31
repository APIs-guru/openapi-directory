package shared

type Artifact struct {
	Location *ArtifactLocation `json:"location,omitempty"`
	Name     *string           `json:"name,omitempty"`
	Revision *string           `json:"revision,omitempty"`
}
