package shared

type ListDashboardsResponse struct {
	DashboardSummaries []DashboardSummary `json:"dashboardSummaries"`
	NextToken          *string            `json:"nextToken"`
}
