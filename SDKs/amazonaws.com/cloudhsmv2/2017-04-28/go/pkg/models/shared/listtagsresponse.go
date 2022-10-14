package shared

type ListTagsResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	TagList   []Tag   `json:"TagList"`
}
