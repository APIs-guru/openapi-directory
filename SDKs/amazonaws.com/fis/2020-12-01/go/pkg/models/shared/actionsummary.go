package shared

type ActionSummary struct {
	Description *string                 `json:"description"`
	ID          *string                 `json:"id"`
	Tags        map[string]string       `json:"tags"`
	Targets     map[string]ActionTarget `json:"targets"`
}
