package shared



type CustomerConnectorInfo struct {
    ActiveConnectors int64 `json:"activeConnectors"`
    BlackListedConnectors int64 `json:"blackListedConnectors"`
    HealthyConnectors int64 `json:"healthyConnectors"`
    ShutdownConnectors int64 `json:"shutdownConnectors"`
    TotalConnectors int64 `json:"totalConnectors"`
    UnhealthyConnectors int64 `json:"unhealthyConnectors"`
    UnknownConnectors int64 `json:"unknownConnectors"`
    
}

