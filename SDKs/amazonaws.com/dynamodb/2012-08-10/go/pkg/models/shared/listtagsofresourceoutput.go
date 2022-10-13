package shared

type ListTagsOfResourceOutput struct {
	NextToken *string `json:"NextToken"`
	Tags      []Tag   `json:"Tags"`
}
