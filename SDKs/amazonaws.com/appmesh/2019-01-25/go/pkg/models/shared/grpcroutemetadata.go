package shared



type GrpcRouteMetadata struct {
    Invert *bool `json:"invert,omitempty"`
    Match *GrpcRouteMetadataMatchMethod `json:"match,omitempty"`
    Name string `json:"name"`
    
}

