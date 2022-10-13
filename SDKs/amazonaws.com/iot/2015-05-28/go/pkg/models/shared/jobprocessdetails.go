package shared

type JobProcessDetails struct {
	NumberOfCanceledThings   *int64   `json:"numberOfCanceledThings"`
	NumberOfFailedThings     *int64   `json:"numberOfFailedThings"`
	NumberOfInProgressThings *int64   `json:"numberOfInProgressThings"`
	NumberOfQueuedThings     *int64   `json:"numberOfQueuedThings"`
	NumberOfRejectedThings   *int64   `json:"numberOfRejectedThings"`
	NumberOfRemovedThings    *int64   `json:"numberOfRemovedThings"`
	NumberOfSucceededThings  *int64   `json:"numberOfSucceededThings"`
	NumberOfTimedOutThings   *int64   `json:"numberOfTimedOutThings"`
	ProcessingTargets        []string `json:"processingTargets"`
}
