package shared

// FailedItemDetails
// Includes details about the failed items.
type FailedItemDetails struct {
	FailureCode FailedItemErrorCodeEnum `json:"failureCode"`
	Retryable   bool                    `json:"retryable"`
}
