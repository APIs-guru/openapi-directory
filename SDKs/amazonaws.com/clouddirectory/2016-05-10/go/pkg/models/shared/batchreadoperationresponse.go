package shared

type BatchReadOperationResponse struct {
	ExceptionResponse  *BatchReadException          `json:"ExceptionResponse"`
	SuccessfulResponse *BatchReadSuccessfulResponse `json:"SuccessfulResponse"`
}
