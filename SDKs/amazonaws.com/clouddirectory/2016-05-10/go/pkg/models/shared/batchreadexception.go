package shared

type BatchReadException struct {
	Message *string                     `json:"Message"`
	Type    *BatchReadExceptionTypeEnum `json:"Type"`
}
