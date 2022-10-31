package shared



type BatchItemError struct {
    ErrorCode *string `json:"ErrorCode,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    Index *int64 `json:"Index,omitempty"`
    
}

