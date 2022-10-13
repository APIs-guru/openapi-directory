package shared

type ListTagsForResourceOutput struct {
	NextToken *string           `json:"nextToken"`
	Tags      map[string]string `json:"tags"`
}
