package shared

type ListProjectsRequest struct {
	Arn       *string `json:"arn"`
	NextToken *string `json:"nextToken"`
}
