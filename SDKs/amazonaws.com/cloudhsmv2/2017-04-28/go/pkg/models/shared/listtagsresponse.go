package shared

type ListTagsResponse struct {
	NextToken *string `json:"NextToken"`
	TagList   []Tag   `json:"TagList"`
}
