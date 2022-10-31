package shared



type BatchReadException struct {
    Message *string `json:"Message,omitempty"`
    Type *BatchReadExceptionTypeEnum `json:"Type,omitempty"`
    
}

