package shared

type TestGridSessionArtifact struct {
	Filename *string                          `json:"filename"`
	Type     *TestGridSessionArtifactTypeEnum `json:"type"`
	URL      *string                          `json:"url"`
}
