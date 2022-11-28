package shared

// HTTPRetryPolicy
// An object that represents a retry policy. Specify at least one value for at least one of the types of <code>RetryEvents</code>, a value for <code>maxRetries</code>, and a value for <code>perRetryTimeout</code>. Both <code>server-error</code> and <code>gateway-error</code> under <code>httpRetryEvents</code> include the Envoy <code>reset</code> policy. For more information on the <code>reset</code> policy, see the <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/router_filter#x-envoy-retry-on">Envoy documentation</a>.
type HTTPRetryPolicy struct {
	HTTPRetryEvents []string                  `json:"httpRetryEvents,omitempty"`
	MaxRetries      int64                     `json:"maxRetries"`
	PerRetryTimeout Duration                  `json:"perRetryTimeout"`
	TCPRetryEvents  []TCPRetryPolicyEventEnum `json:"tcpRetryEvents,omitempty"`
}
