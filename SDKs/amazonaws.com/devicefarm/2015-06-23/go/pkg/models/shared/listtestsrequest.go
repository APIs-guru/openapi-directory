package shared

type ListTestsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken"`
}
