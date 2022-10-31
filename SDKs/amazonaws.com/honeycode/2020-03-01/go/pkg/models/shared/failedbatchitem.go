package shared

type FailedBatchItem struct {
	ErrorMessage string `json:"errorMessage"`
	ID           string `json:"id"`
}
