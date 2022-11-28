package shared

// GrpcGatewayRouteMatch
// An object that represents the criteria for determining a request match.
type GrpcGatewayRouteMatch struct {
	Hostname    *GatewayRouteHostnameMatch `json:"hostname,omitempty"`
	Metadata    []GrpcGatewayRouteMetadata `json:"metadata,omitempty"`
	ServiceName *string                    `json:"serviceName,omitempty"`
}
