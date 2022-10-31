package shared

type TestGridSessionArtifact struct {
	Filename *string                          `json:"filename,omitempty"`
	Type     *TestGridSessionArtifactTypeEnum `json:"type,omitempty"`
	URL      *string                          `json:"url,omitempty"`
}
