package shared

// Artifact
// Represents information about an artifact that is worked on by actions in the pipeline.
type Artifact struct {
	Location *ArtifactLocation `json:"location,omitempty"`
	Name     *string           `json:"name,omitempty"`
	Revision *string           `json:"revision,omitempty"`
}
