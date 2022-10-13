package shared

type GrpcRouteMatch struct {
	Metadata    []GrpcRouteMetadata `json:"metadata"`
	MethodName  *string             `json:"methodName"`
	ServiceName *string             `json:"serviceName"`
}
