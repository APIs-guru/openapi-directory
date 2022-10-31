package shared

type AutoRollbackConfiguration struct {
	Enabled *bool                   `json:"enabled,omitempty"`
	Events  []AutoRollbackEventEnum `json:"events,omitempty"`
}
