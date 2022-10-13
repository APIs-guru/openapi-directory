package shared

type ListNetworkProfilesRequest struct {
	Arn       string                  `json:"arn"`
	NextToken *string                 `json:"nextToken"`
	Type      *NetworkProfileTypeEnum `json:"type"`
}
