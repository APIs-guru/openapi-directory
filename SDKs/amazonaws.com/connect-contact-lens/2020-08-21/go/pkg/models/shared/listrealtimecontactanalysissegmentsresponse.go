package shared

type ListRealtimeContactAnalysisSegmentsResponse struct {
	NextToken *string                          `json:"NextToken"`
	Segments  []RealtimeContactAnalysisSegment `json:"Segments"`
}
