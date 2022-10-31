package shared

type Hit struct {
	Exprs      map[string]string   `json:"exprs,omitempty"`
	Fields     map[string][]string `json:"fields,omitempty"`
	Highlights map[string]string   `json:"highlights,omitempty"`
	ID         *string             `json:"id,omitempty"`
}
