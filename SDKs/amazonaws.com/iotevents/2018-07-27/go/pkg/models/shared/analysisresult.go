package shared

type AnalysisResult struct {
	Level     *AnalysisResultLevelEnum `json:"level"`
	Locations []AnalysisResultLocation `json:"locations"`
	Message   *string                  `json:"message"`
	Type      *string                  `json:"type"`
}
