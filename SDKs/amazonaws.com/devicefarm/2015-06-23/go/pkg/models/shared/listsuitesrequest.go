package shared

type ListSuitesRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken"`
}
