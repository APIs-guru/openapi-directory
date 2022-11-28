package shared

// Listener
// Information about a listener.
type Listener struct {
	AlpnPolicy      []string
	Certificates    []Certificate
	DefaultActions  []Action
	ListenerArn     *string
	LoadBalancerArn *string
	Port            *int64
	Protocol        *ProtocolEnumEnum
	SslPolicy       *string
}
