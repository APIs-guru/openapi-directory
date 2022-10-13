package shared

type ListRunsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken"`
}
