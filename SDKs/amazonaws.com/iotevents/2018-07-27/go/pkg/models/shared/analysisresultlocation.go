package shared

// AnalysisResultLocation
// Contains information that you can use to locate the field in your detector model that the analysis result references.
type AnalysisResultLocation struct {
	Path *string `json:"path,omitempty"`
}
