package shared

type ListTagsForResourceOutput struct {
	NextToken *string  `json:"nextToken"`
	Tags      []TagRef `json:"tags"`
}
