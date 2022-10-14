package shared

type TaskStatistics struct {
	CanceledChecks                 *int64 `json:"canceledChecks,omitempty"`
	CompliantChecks                *int64 `json:"compliantChecks,omitempty"`
	FailedChecks                   *int64 `json:"failedChecks,omitempty"`
	InProgressChecks               *int64 `json:"inProgressChecks,omitempty"`
	NonCompliantChecks             *int64 `json:"nonCompliantChecks,omitempty"`
	TotalChecks                    *int64 `json:"totalChecks,omitempty"`
	WaitingForDataCollectionChecks *int64 `json:"waitingForDataCollectionChecks,omitempty"`
}
