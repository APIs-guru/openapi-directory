package shared

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
