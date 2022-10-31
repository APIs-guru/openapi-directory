package shared

type TaskStatisticsForAuditCheck struct {
	CanceledFindingsCount  *int64 `json:"canceledFindingsCount,omitempty"`
	FailedFindingsCount    *int64 `json:"failedFindingsCount,omitempty"`
	SkippedFindingsCount   *int64 `json:"skippedFindingsCount,omitempty"`
	SucceededFindingsCount *int64 `json:"succeededFindingsCount,omitempty"`
	TotalFindingsCount     *int64 `json:"totalFindingsCount,omitempty"`
}
