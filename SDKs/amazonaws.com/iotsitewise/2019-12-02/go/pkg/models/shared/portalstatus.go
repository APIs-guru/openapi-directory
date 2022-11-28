package shared

// PortalStatus
// Contains information about the current status of a portal.
type PortalStatus struct {
	Error *MonitorErrorDetails `json:"error,omitempty"`
	State PortalStateEnum      `json:"state"`
}
