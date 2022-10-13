package shared

type GetDetectorModelAnalysisResultsResponse struct {
	AnalysisResults []AnalysisResult `json:"analysisResults"`
	NextToken       *string          `json:"nextToken"`
}
