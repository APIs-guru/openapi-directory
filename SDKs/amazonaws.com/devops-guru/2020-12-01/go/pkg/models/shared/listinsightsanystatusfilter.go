package shared

// ListInsightsAnyStatusFilter
//
//	Used to filter for insights that have any status.
type ListInsightsAnyStatusFilter struct {
	StartTimeRange StartTimeRange  `json:"StartTimeRange"`
	Type           InsightTypeEnum `json:"Type"`
}
