package shared

type PortalStatus struct {
	Error *MonitorErrorDetails `json:"error,omitempty"`
	State PortalStateEnum      `json:"state"`
}
