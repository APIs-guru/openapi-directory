package shared

type GrpcGatewayRouteMatch struct {
	Hostname    *GatewayRouteHostnameMatch `json:"hostname"`
	Metadata    []GrpcGatewayRouteMetadata `json:"metadata"`
	ServiceName *string                    `json:"serviceName"`
}
