package shared

type ListSharedReportGroupsOutput struct {
	NextToken    *string  `json:"nextToken,omitempty"`
	ReportGroups []string `json:"reportGroups,omitempty"`
}
