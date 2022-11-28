package shared

// ListInsightsOngoingStatusFilter
//
//	Used to filter for insights that have the status <code>ONGOING</code>.
type ListInsightsOngoingStatusFilter struct {
	Type InsightTypeEnum `json:"Type"`
}
