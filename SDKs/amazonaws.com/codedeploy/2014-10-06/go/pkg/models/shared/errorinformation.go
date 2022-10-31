package shared



type ErrorInformation struct {
    Code *ErrorCodeEnum `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

