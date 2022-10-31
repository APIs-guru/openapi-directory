package shared

type ListRealtimeContactAnalysisSegmentsResponse struct {
	NextToken *string                          `json:"NextToken,omitempty"`
	Segments  []RealtimeContactAnalysisSegment `json:"Segments"`
}
