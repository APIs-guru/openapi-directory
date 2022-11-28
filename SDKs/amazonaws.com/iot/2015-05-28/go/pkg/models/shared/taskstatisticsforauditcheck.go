package shared

// TaskStatisticsForAuditCheck
// Provides summary counts of how many tasks for findings are in a particular state. This information is included in the response from DescribeAuditMitigationActionsTask.
type TaskStatisticsForAuditCheck struct {
	CanceledFindingsCount  *int64 `json:"canceledFindingsCount,omitempty"`
	FailedFindingsCount    *int64 `json:"failedFindingsCount,omitempty"`
	SkippedFindingsCount   *int64 `json:"skippedFindingsCount,omitempty"`
	SucceededFindingsCount *int64 `json:"succeededFindingsCount,omitempty"`
	TotalFindingsCount     *int64 `json:"totalFindingsCount,omitempty"`
}
