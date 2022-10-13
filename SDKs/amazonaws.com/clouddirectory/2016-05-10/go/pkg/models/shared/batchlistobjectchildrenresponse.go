package shared

type BatchListObjectChildrenResponse struct {
	Children  map[string]string `json:"Children"`
	NextToken *string           `json:"NextToken"`
}
