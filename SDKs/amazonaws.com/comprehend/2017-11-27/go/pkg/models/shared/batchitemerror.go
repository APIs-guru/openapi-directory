package shared

type BatchItemError struct {
	ErrorCode    *string `json:"ErrorCode"`
	ErrorMessage *string `json:"ErrorMessage"`
	Index        *int64  `json:"Index"`
}
