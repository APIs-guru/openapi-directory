package shared

type GetReportGroupTrendOutput struct {
	RawData []ReportWithRawData    `json:"rawData"`
	Stats   *ReportGroupTrendStats `json:"stats"`
}
