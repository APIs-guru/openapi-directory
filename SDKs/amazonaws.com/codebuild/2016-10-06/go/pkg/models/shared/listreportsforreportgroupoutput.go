package shared

type ListReportsForReportGroupOutput struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Reports   []string `json:"reports,omitempty"`
}
