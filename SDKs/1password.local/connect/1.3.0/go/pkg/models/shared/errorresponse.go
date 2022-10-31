package shared



type ErrorResponse struct {
    Message *string `json:"message,omitempty"`
    Status *int64 `json:"status,omitempty"`
    
}

