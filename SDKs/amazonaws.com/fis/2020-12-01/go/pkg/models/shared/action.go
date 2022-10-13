package shared

type Action struct {
	Description *string                    `json:"description"`
	ID          *string                    `json:"id"`
	Parameters  map[string]ActionParameter `json:"parameters"`
	Tags        map[string]string          `json:"tags"`
	Targets     map[string]ActionTarget    `json:"targets"`
}
