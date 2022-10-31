package shared

type GrpcRoute struct {
	Action      GrpcRouteAction  `json:"action"`
	Match       GrpcRouteMatch   `json:"match"`
	RetryPolicy *GrpcRetryPolicy `json:"retryPolicy,omitempty"`
	Timeout     *GrpcTimeout     `json:"timeout,omitempty"`
}
