package shared



type BatchReadOperationResponse struct {
    ExceptionResponse *BatchReadException `json:"ExceptionResponse,omitempty"`
    SuccessfulResponse *BatchReadSuccessfulResponse `json:"SuccessfulResponse,omitempty"`
    
}

