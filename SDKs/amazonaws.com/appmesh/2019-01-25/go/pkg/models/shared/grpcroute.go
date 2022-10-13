package shared

type GrpcRoute struct {
	Action      GrpcRouteAction  `json:"action"`
	Match       GrpcRouteMatch   `json:"match"`
	RetryPolicy *GrpcRetryPolicy `json:"retryPolicy"`
	Timeout     *GrpcTimeout     `json:"timeout"`
}
