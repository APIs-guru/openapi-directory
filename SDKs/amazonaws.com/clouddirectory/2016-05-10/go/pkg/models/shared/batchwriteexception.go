package shared

type BatchWriteException struct {
	Index   *int64                       `json:"Index"`
	Message *string                      `json:"Message"`
	Type    *BatchWriteExceptionTypeEnum `json:"Type"`
}
