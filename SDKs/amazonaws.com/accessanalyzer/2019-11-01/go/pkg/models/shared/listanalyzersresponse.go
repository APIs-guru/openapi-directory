package shared

// ListAnalyzersResponse
// The response to the request.
type ListAnalyzersResponse struct {
	Analyzers []AnalyzerSummary `json:"analyzers"`
	NextToken *string           `json:"nextToken,omitempty"`
}
