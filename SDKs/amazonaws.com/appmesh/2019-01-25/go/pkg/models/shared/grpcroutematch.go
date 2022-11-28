package shared

// GrpcRouteMatch
// An object that represents the criteria for determining a request match.
type GrpcRouteMatch struct {
	Metadata    []GrpcRouteMetadata `json:"metadata,omitempty"`
	MethodName  *string             `json:"methodName,omitempty"`
	ServiceName *string             `json:"serviceName,omitempty"`
}
