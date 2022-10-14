package shared

type PortOverride struct {
	EndpointPort *int64 `json:"EndpointPort,omitempty"`
	ListenerPort *int64 `json:"ListenerPort,omitempty"`
}
