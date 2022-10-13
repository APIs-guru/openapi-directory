package shared

type ImportTaskFilter struct {
	Name   *ImportTaskFilterNameEnum `json:"name"`
	Values []string                  `json:"values"`
}
