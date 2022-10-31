package shared

type GroupResult struct {
	GroupID   *string       `json:"groupId,omitempty"`
	GroupName *string       `json:"groupName,omitempty"`
	Tests     []TestCaseRun `json:"tests,omitempty"`
}
