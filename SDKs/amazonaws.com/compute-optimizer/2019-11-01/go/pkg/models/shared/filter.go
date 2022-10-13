package shared

type Filter struct {
	Name   *FilterNameEnum `json:"name"`
	Values []string        `json:"values"`
}
