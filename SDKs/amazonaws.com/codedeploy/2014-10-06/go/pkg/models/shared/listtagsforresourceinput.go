package shared

type ListTagsForResourceInput struct {
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
