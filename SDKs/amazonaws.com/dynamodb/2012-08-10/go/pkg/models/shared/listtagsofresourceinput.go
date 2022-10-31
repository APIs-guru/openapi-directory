package shared

type ListTagsOfResourceInput struct {
	NextToken   *string `json:"NextToken,omitempty"`
	ResourceArn string  `json:"ResourceArn"`
}
