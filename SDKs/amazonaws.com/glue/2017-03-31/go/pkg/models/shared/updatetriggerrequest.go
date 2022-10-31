package shared

type UpdateTriggerRequest struct {
	Name          string        `json:"Name"`
	TriggerUpdate TriggerUpdate `json:"TriggerUpdate"`
}
