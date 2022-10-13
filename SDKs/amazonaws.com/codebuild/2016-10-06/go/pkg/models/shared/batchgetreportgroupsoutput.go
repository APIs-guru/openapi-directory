package shared

type BatchGetReportGroupsOutput struct {
	ReportGroups         []ReportGroup `json:"reportGroups"`
	ReportGroupsNotFound []string      `json:"reportGroupsNotFound"`
}
