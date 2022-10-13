package shared

type ListReportsForReportGroupOutput struct {
	NextToken *string  `json:"nextToken"`
	Reports   []string `json:"reports"`
}
