package shared



type ErrorDetail struct {
    ErrorCode *ErrorCodeEnum `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    ResourceIds []string `json:"resourceIds,omitempty"`
    
}

