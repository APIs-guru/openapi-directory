package shared

type PortOverride struct {
	EndpointPort *int64 `json:"EndpointPort"`
	ListenerPort *int64 `json:"ListenerPort"`
}
