package shared

// TaskExecutionResultDetail
// Describes the detailed result of a <code>TaskExecution</code> operation. This result includes the time in milliseconds spent in each phase, the status of the task execution, and the errors encountered.
type TaskExecutionResultDetail struct {
	ErrorCode        *string          `json:"ErrorCode,omitempty"`
	ErrorDetail      *string          `json:"ErrorDetail,omitempty"`
	PrepareDuration  *int64           `json:"PrepareDuration,omitempty"`
	PrepareStatus    *PhaseStatusEnum `json:"PrepareStatus,omitempty"`
	TotalDuration    *int64           `json:"TotalDuration,omitempty"`
	TransferDuration *int64           `json:"TransferDuration,omitempty"`
	TransferStatus   *PhaseStatusEnum `json:"TransferStatus,omitempty"`
	VerifyDuration   *int64           `json:"VerifyDuration,omitempty"`
	VerifyStatus     *PhaseStatusEnum `json:"VerifyStatus,omitempty"`
}
