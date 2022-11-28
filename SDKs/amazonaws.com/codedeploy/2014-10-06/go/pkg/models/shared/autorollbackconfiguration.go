package shared

// AutoRollbackConfiguration
// Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.
type AutoRollbackConfiguration struct {
	Enabled *bool                   `json:"enabled,omitempty"`
	Events  []AutoRollbackEventEnum `json:"events,omitempty"`
}
