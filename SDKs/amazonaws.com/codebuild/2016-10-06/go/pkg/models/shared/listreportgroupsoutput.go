package shared

type ListReportGroupsOutput struct {
	NextToken    *string  `json:"nextToken"`
	ReportGroups []string `json:"reportGroups"`
}
