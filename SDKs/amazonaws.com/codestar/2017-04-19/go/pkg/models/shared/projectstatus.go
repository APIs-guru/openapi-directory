package shared

type ProjectStatus struct {
	Reason *string `json:"reason"`
	State  string  `json:"state"`
}
