package shared

type GroupResult struct {
	GroupID   *string       `json:"groupId"`
	GroupName *string       `json:"groupName"`
	Tests     []TestCaseRun `json:"tests"`
}
