package shared

type ListObjectParentsResponse struct {
	NextToken *string           `json:"NextToken"`
	Parents   map[string]string `json:"Parents"`
}
