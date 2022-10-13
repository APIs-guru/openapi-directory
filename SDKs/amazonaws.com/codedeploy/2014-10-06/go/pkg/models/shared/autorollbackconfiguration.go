package shared

type AutoRollbackConfiguration struct {
	Enabled *bool                   `json:"enabled"`
	Events  []AutoRollbackEventEnum `json:"events"`
}
