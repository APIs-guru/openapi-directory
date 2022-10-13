package shared

type ListTagsForResourceInput struct {
	MaxResults  *int64  `json:"MaxResults"`
	NextToken   *string `json:"NextToken"`
	ResourceArn string  `json:"ResourceARN"`
}
