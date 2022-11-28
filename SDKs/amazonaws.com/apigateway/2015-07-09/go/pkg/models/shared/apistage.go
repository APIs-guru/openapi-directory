package shared

// APIStage
// API stage name of the associated API stage in a usage plan.
type APIStage struct {
	APIID    *string                     `json:"apiId,omitempty"`
	Stage    *string                     `json:"stage,omitempty"`
	Throttle map[string]ThrottleSettings `json:"throttle,omitempty"`
}
