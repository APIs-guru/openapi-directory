package shared



type GetReportGroupTrendInput struct {
    NumOfReports *int64 `json:"numOfReports,omitempty"`
    ReportGroupArn string `json:"reportGroupArn"`
    TrendField ReportGroupTrendFieldTypeEnum `json:"trendField"`
    
}

