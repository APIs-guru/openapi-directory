package shared

type ListReportsForReportGroupInput struct {
	Filter         *ReportFilter      `json:"filter"`
	MaxResults     *int64             `json:"maxResults"`
	NextToken      *string            `json:"nextToken"`
	ReportGroupArn string             `json:"reportGroupArn"`
	SortOrder      *SortOrderTypeEnum `json:"sortOrder"`
}
