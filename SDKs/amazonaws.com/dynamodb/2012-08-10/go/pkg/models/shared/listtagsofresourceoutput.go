package shared

type ListTagsOfResourceOutput struct {
	NextToken *string `json:"NextToken,omitempty"`
	Tags      []Tag   `json:"Tags,omitempty"`
}
