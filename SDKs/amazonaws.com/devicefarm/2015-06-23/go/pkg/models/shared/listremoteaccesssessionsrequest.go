package shared

type ListRemoteAccessSessionsRequest struct {
	Arn       string  `json:"arn"`
	NextToken *string `json:"nextToken"`
}
