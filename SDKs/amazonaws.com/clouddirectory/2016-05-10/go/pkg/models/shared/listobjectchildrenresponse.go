package shared

type ListObjectChildrenResponse struct {
	Children  map[string]string `json:"Children"`
	NextToken *string           `json:"NextToken"`
}
