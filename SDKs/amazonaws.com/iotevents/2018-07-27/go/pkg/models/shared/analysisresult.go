package shared

type AnalysisResult struct {
	Level     *AnalysisResultLevelEnum `json:"level,omitempty"`
	Locations []AnalysisResultLocation `json:"locations,omitempty"`
	Message   *string                  `json:"message,omitempty"`
	Type      *string                  `json:"type,omitempty"`
}
