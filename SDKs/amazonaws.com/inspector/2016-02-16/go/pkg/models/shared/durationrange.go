package shared

// DurationRange
// This data type is used in the <a>AssessmentTemplateFilter</a> data type.
type DurationRange struct {
	MaxSeconds *int64 `json:"maxSeconds,omitempty"`
	MinSeconds *int64 `json:"minSeconds,omitempty"`
}
