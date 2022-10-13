package shared

type ListTagsForResourceResult struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
