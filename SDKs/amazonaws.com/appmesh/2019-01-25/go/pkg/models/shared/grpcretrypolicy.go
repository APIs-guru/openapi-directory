package shared

type GrpcRetryPolicy struct {
	GrpcRetryEvents []GrpcRetryPolicyEventEnum `json:"grpcRetryEvents"`
	HTTPRetryEvents []string                   `json:"httpRetryEvents"`
	MaxRetries      int64                      `json:"maxRetries"`
	PerRetryTimeout Duration                   `json:"perRetryTimeout"`
	TCPRetryEvents  []TCPRetryPolicyEventEnum  `json:"tcpRetryEvents"`
}
