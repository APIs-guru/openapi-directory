package shared

// GrpcRouteMetadata
// An object that represents the match metadata for the route.
type GrpcRouteMetadata struct {
	Invert *bool                         `json:"invert,omitempty"`
	Match  *GrpcRouteMetadataMatchMethod `json:"match,omitempty"`
	Name   string                        `json:"name"`
}
