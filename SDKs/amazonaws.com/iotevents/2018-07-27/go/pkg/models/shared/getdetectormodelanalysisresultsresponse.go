package shared



type GetDetectorModelAnalysisResultsResponse struct {
    AnalysisResults []AnalysisResult `json:"analysisResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

