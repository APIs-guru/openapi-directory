package shared

type Filter struct {
	Condition string   `json:"condition"`
	Name      string   `json:"name"`
	Values    []string `json:"values"`
}
