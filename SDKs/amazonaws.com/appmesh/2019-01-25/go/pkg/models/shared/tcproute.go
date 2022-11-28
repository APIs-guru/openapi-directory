package shared

// TCPRoute
// An object that represents a TCP route type.
type TCPRoute struct {
	Action  TCPRouteAction `json:"action"`
	Timeout *TCPTimeout    `json:"timeout,omitempty"`
}
