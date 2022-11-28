package shared

// InsightSelector
// A JSON string that contains a list of insight types that are logged on a trail.
type InsightSelector struct {
	InsightType *InsightTypeEnum `json:"InsightType,omitempty"`
}
