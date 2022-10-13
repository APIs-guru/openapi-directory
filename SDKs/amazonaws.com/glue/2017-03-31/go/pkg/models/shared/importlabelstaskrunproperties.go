package shared

type ImportLabelsTaskRunProperties struct {
	InputS3Path *string `json:"InputS3Path"`
	Replace     *bool   `json:"Replace"`
}
