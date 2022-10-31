package shared



type BatchPutMessageErrorEntry struct {
    ErrorCode *string `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    MessageID *string `json:"messageId,omitempty"`
    
}

