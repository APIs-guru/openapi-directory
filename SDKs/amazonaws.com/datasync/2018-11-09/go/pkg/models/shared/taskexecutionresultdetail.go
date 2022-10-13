package shared

type TaskExecutionResultDetail struct {
	ErrorCode        *string          `json:"ErrorCode"`
	ErrorDetail      *string          `json:"ErrorDetail"`
	PrepareDuration  *int64           `json:"PrepareDuration"`
	PrepareStatus    *PhaseStatusEnum `json:"PrepareStatus"`
	TotalDuration    *int64           `json:"TotalDuration"`
	TransferDuration *int64           `json:"TransferDuration"`
	TransferStatus   *PhaseStatusEnum `json:"TransferStatus"`
	VerifyDuration   *int64           `json:"VerifyDuration"`
	VerifyStatus     *PhaseStatusEnum `json:"VerifyStatus"`
}
