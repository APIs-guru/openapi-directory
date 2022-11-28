package shared

// GrpcGatewayRouteMetadata
// An object representing the metadata of the gateway route.
type GrpcGatewayRouteMetadata struct {
	Invert *bool                    `json:"invert,omitempty"`
	Match  *GrpcMetadataMatchMethod `json:"match,omitempty"`
	Name   string                   `json:"name"`
}
