package shared

type APIStage struct {
	APIID    *string                     `json:"apiId"`
	Stage    *string                     `json:"stage"`
	Throttle map[string]ThrottleSettings `json:"throttle"`
}
