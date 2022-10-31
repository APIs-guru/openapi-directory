package shared



type MonitorErrorDetails struct {
    Code *MonitorErrorCodeEnum `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

