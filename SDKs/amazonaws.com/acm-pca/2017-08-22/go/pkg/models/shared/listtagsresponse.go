package shared

type ListTagsResponse struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
