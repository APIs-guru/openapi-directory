package shared

type ListSharedReportGroupsOutput struct {
	NextToken    *string  `json:"nextToken"`
	ReportGroups []string `json:"reportGroups"`
}
