package shared

type APIStage struct {
	APIID    *string                     `json:"apiId,omitempty"`
	Stage    *string                     `json:"stage,omitempty"`
	Throttle map[string]ThrottleSettings `json:"throttle,omitempty"`
}
