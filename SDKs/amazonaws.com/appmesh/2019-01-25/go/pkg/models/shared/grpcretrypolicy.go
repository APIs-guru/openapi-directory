package shared

type GrpcRetryPolicy struct {
	GrpcRetryEvents []GrpcRetryPolicyEventEnum `json:"grpcRetryEvents,omitempty"`
	HTTPRetryEvents []string                   `json:"httpRetryEvents,omitempty"`
	MaxRetries      int64                      `json:"maxRetries"`
	PerRetryTimeout Duration                   `json:"perRetryTimeout"`
	TCPRetryEvents  []TCPRetryPolicyEventEnum  `json:"tcpRetryEvents,omitempty"`
}
