package shared

// DocumentLabel
// Specifies one of the label or labels that categorize the document being analyzed.
type DocumentLabel struct {
	Name  *string  `json:"Name,omitempty"`
	Score *float32 `json:"Score,omitempty"`
}
