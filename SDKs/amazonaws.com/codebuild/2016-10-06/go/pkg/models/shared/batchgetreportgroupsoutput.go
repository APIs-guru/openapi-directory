package shared



type BatchGetReportGroupsOutput struct {
    ReportGroups []ReportGroup `json:"reportGroups,omitempty"`
    ReportGroupsNotFound []string `json:"reportGroupsNotFound,omitempty"`
    
}

