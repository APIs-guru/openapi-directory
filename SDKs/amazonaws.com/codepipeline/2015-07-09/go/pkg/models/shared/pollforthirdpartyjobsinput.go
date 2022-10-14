package shared

type PollForThirdPartyJobsInput struct {
	ActionTypeID ActionTypeID `json:"actionTypeId"`
	MaxBatchSize *int64       `json:"maxBatchSize,omitempty"`
}
