package shared

type ListTagsForProjectResult struct {
	NextToken *string           `json:"nextToken,omitempty"`
	Tags      map[string]string `json:"tags,omitempty"`
}
