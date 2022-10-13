package shared

type ListTagsForResourceInput struct {
	NextToken   *string `json:"nextToken"`
	ResourceArn string  `json:"resourceArn"`
}
