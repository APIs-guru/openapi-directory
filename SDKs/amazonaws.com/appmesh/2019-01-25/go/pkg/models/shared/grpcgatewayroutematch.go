package shared



type GrpcGatewayRouteMatch struct {
    Hostname *GatewayRouteHostnameMatch `json:"hostname,omitempty"`
    Metadata []GrpcGatewayRouteMetadata `json:"metadata,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

