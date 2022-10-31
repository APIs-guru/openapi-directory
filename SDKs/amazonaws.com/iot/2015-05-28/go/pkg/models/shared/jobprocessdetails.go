package shared



type JobProcessDetails struct {
    NumberOfCanceledThings *int64 `json:"numberOfCanceledThings,omitempty"`
    NumberOfFailedThings *int64 `json:"numberOfFailedThings,omitempty"`
    NumberOfInProgressThings *int64 `json:"numberOfInProgressThings,omitempty"`
    NumberOfQueuedThings *int64 `json:"numberOfQueuedThings,omitempty"`
    NumberOfRejectedThings *int64 `json:"numberOfRejectedThings,omitempty"`
    NumberOfRemovedThings *int64 `json:"numberOfRemovedThings,omitempty"`
    NumberOfSucceededThings *int64 `json:"numberOfSucceededThings,omitempty"`
    NumberOfTimedOutThings *int64 `json:"numberOfTimedOutThings,omitempty"`
    ProcessingTargets []string `json:"processingTargets,omitempty"`
    
}

