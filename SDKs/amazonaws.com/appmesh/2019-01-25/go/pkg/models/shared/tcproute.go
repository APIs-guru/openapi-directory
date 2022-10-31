package shared

type TCPRoute struct {
	Action  TCPRouteAction `json:"action"`
	Timeout *TCPTimeout    `json:"timeout,omitempty"`
}
