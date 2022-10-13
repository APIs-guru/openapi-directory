package shared

type GrpcRouteMetadata struct {
	Invert *bool                         `json:"invert"`
	Match  *GrpcRouteMetadataMatchMethod `json:"match"`
	Name   string                        `json:"name"`
}
