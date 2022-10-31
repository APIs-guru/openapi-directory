package shared



type GrpcRouteMatch struct {
    Metadata []GrpcRouteMetadata `json:"metadata,omitempty"`
    MethodName *string `json:"methodName,omitempty"`
    ServiceName *string `json:"serviceName,omitempty"`
    
}

