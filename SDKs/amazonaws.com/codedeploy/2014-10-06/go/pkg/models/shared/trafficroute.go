package shared

// TrafficRoute
//
//	Information about a listener. The listener contains the path used to route traffic that is received from the load balancer to a target group.
type TrafficRoute struct {
	ListenerArns []string `json:"listenerArns,omitempty"`
}
