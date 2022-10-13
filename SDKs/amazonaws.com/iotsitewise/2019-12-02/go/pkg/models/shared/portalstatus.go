package shared

type PortalStatus struct {
	Error *MonitorErrorDetails `json:"error"`
	State PortalStateEnum      `json:"state"`
}
