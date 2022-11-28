package shared

// Attribute
// This data type is used as a request parameter in the <a>AddAttributesToFindings</a> and <a>CreateAssessmentTemplate</a> actions.
type Attribute struct {
	Key   string  `json:"key"`
	Value *string `json:"value,omitempty"`
}
