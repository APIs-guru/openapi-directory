package shared

type TaskStatistics struct {
	CanceledChecks                 *int64 `json:"canceledChecks"`
	CompliantChecks                *int64 `json:"compliantChecks"`
	FailedChecks                   *int64 `json:"failedChecks"`
	InProgressChecks               *int64 `json:"inProgressChecks"`
	NonCompliantChecks             *int64 `json:"nonCompliantChecks"`
	TotalChecks                    *int64 `json:"totalChecks"`
	WaitingForDataCollectionChecks *int64 `json:"waitingForDataCollectionChecks"`
}
