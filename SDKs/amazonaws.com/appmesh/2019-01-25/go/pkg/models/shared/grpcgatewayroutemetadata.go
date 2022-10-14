package shared

type GrpcGatewayRouteMetadata struct {
	Invert *bool                    `json:"invert,omitempty"`
	Match  *GrpcMetadataMatchMethod `json:"match,omitempty"`
	Name   string                   `json:"name"`
}
