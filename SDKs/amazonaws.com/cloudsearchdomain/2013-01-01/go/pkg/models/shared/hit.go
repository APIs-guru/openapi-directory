package shared

type Hit struct {
	Exprs      map[string]string   `json:"exprs"`
	Fields     map[string][]string `json:"fields"`
	Highlights map[string]string   `json:"highlights"`
	ID         *string             `json:"id"`
}
