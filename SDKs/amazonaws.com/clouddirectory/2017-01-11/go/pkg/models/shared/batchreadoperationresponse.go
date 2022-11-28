package shared

// BatchReadOperationResponse
// Represents the output of a <code>BatchRead</code> response operation.
type BatchReadOperationResponse struct {
	ExceptionResponse  *BatchReadException          `json:"ExceptionResponse,omitempty"`
	SuccessfulResponse *BatchReadSuccessfulResponse `json:"SuccessfulResponse,omitempty"`
}
