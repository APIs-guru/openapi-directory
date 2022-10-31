package shared

type ImportLabelsTaskRunProperties struct {
	InputS3Path *string `json:"InputS3Path,omitempty"`
	Replace     *bool   `json:"Replace,omitempty"`
}
