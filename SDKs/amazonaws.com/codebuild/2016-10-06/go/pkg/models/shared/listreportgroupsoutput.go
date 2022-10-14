package shared

type ListReportGroupsOutput struct {
	NextToken    *string  `json:"nextToken,omitempty"`
	ReportGroups []string `json:"reportGroups,omitempty"`
}
