package shared

type ListTagsOfResourceInput struct {
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
