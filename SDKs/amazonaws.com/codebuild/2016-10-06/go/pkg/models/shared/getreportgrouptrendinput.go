package shared

type GetReportGroupTrendInput struct {
	NumOfReports   *int64                        `json:"numOfReports"`
	ReportGroupArn string                        `json:"reportGroupArn"`
	TrendField     ReportGroupTrendFieldTypeEnum `json:"trendField"`
}
