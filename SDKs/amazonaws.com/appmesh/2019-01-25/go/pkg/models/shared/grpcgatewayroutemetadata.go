package shared

type GrpcGatewayRouteMetadata struct {
	Invert *bool                    `json:"invert"`
	Match  *GrpcMetadataMatchMethod `json:"match"`
	Name   string                   `json:"name"`
}
