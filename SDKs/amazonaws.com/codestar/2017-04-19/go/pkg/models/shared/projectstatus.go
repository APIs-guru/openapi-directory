package shared

// ProjectStatus
// An indication of whether a project creation or deletion is failed or successful.
type ProjectStatus struct {
	Reason *string `json:"reason,omitempty"`
	State  string  `json:"state"`
}
