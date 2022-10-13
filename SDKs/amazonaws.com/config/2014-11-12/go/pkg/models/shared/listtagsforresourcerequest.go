package shared

type ListTagsForResourceRequest struct {
	Limit       *int64  `json:"Limit"`
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceArn"`
}
