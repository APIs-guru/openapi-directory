package shared

type ListTagsForResourceResponse struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
