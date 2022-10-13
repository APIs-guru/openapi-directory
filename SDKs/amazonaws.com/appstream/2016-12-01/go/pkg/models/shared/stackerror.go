package shared

type StackError struct {
	ErrorCode    *StackErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage *string             `json:"ErrorMessage"`
}
