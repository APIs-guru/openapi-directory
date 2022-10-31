package shared

type ListAnalyzersResponse struct {
	Analyzers []AnalyzerSummary `json:"analyzers"`
	NextToken *string           `json:"nextToken,omitempty"`
}
