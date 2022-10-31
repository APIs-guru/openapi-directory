package shared



type HTTPRetryPolicy struct {
    HTTPRetryEvents []string `json:"httpRetryEvents,omitempty"`
    MaxRetries int64 `json:"maxRetries"`
    PerRetryTimeout Duration `json:"perRetryTimeout"`
    TCPRetryEvents []TCPRetryPolicyEventEnum `json:"tcpRetryEvents,omitempty"`
    
}

