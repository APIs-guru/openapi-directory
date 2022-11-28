package shared

// GrpcRoute
// An object that represents a gRPC route type.
type GrpcRoute struct {
	Action      GrpcRouteAction  `json:"action"`
	Match       GrpcRouteMatch   `json:"match"`
	RetryPolicy *GrpcRetryPolicy `json:"retryPolicy,omitempty"`
	Timeout     *GrpcTimeout     `json:"timeout,omitempty"`
}
