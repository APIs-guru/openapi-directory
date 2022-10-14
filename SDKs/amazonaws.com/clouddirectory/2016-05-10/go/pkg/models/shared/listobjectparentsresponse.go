package shared

type ListObjectParentsResponse struct {
	NextToken *string           `json:"NextToken,omitempty"`
	Parents   map[string]string `json:"Parents,omitempty"`
}
