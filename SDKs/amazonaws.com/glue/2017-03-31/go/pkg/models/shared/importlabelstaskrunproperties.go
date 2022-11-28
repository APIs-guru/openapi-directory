package shared

// ImportLabelsTaskRunProperties
// Specifies configuration properties for an importing labels task run.
type ImportLabelsTaskRunProperties struct {
	InputS3Path *string `json:"InputS3Path,omitempty"`
	Replace     *bool   `json:"Replace,omitempty"`
}
