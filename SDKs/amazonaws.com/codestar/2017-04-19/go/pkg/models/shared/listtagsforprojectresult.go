package shared

type ListTagsForProjectResult struct {
	NextToken *string           `json:"nextToken"`
	Tags      map[string]string `json:"tags"`
}
