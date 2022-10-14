package shared

type ListNetworkProfilesRequest struct {
	Arn       string                  `json:"arn"`
	NextToken *string                 `json:"nextToken,omitempty"`
	Type      *NetworkProfileTypeEnum `json:"type,omitempty"`
}
