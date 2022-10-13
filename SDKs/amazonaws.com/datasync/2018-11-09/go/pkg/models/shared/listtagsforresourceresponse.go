package shared

type ListTagsForResourceResponse struct {
	NextToken *string        `json:"NextToken"`
	Tags      []TagListEntry `json:"Tags"`
}
