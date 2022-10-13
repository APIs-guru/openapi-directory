package shared

type TaskStatisticsForAuditCheck struct {
	CanceledFindingsCount  *int64 `json:"canceledFindingsCount"`
	FailedFindingsCount    *int64 `json:"failedFindingsCount"`
	SkippedFindingsCount   *int64 `json:"skippedFindingsCount"`
	SucceededFindingsCount *int64 `json:"succeededFindingsCount"`
	TotalFindingsCount     *int64 `json:"totalFindingsCount"`
}
