package shared

type ListTagsForResourceOutput struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
