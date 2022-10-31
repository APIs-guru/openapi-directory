package shared

type ListObjectChildrenResponse struct {
	Children  map[string]string `json:"Children,omitempty"`
	NextToken *string           `json:"NextToken,omitempty"`
}
