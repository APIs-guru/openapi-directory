package shared

type StartImportLabelsTaskRunRequest struct {
	InputS3Path      string `json:"InputS3Path"`
	ReplaceAllLabels *bool  `json:"ReplaceAllLabels,omitempty"`
	TransformID      string `json:"TransformId"`
}
