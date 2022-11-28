package shared

// ListInsightsClosedStatusFilter
//
//	Used to filter for insights that have the status <code>CLOSED</code>.
type ListInsightsClosedStatusFilter struct {
	EndTimeRange EndTimeRange    `json:"EndTimeRange"`
	Type         InsightTypeEnum `json:"Type"`
}
