package shared

// FailedBatchItem
//
//	A single item in a batch that failed to perform the intended action because of an error preventing it from succeeding.
type FailedBatchItem struct {
	ErrorMessage string `json:"errorMessage"`
	ID           string `json:"id"`
}
