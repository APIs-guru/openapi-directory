package shared

// TestGridSessionArtifact
// <p>Artifacts are video and other files that are produced in the process of running a browser in an automated context. </p> <note> <p>Video elements might be broken up into multiple artifacts as they grow in size during creation. </p> </note>
type TestGridSessionArtifact struct {
	Filename *string                          `json:"filename,omitempty"`
	Type     *TestGridSessionArtifactTypeEnum `json:"type,omitempty"`
	URL      *string                          `json:"url,omitempty"`
}
