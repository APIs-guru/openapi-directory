package shared

// DocumentClass
// Specifies the class that categorizes the document being analyzed
type DocumentClass struct {
	Name  *string  `json:"Name,omitempty"`
	Score *float32 `json:"Score,omitempty"`
}
