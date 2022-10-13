package shared

type Filter struct {
	Name   *FilterNameEnum `json:"Name"`
	Values []string        `json:"Values"`
}
