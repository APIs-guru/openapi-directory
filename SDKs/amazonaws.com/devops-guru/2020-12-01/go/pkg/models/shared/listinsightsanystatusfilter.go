package shared

type ListInsightsAnyStatusFilter struct {
	StartTimeRange StartTimeRange  `json:"StartTimeRange"`
	Type           InsightTypeEnum `json:"Type"`
}
