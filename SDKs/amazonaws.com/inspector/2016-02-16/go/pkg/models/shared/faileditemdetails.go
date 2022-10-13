package shared

type FailedItemDetails struct {
	FailureCode FailedItemErrorCodeEnum `json:"failureCode"`
	Retryable   bool                    `json:"retryable"`
}
