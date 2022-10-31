package shared

type TagFilter struct {
	Name   string   `json:"name"`
	Values []string `json:"values"`
}
