package shared

type ImportTaskFilter struct {
	Name   *ImportTaskFilterNameEnum `json:"name,omitempty"`
	Values []string                  `json:"values,omitempty"`
}
