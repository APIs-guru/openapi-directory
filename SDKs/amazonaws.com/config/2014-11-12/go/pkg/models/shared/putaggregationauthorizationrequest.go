package shared

type PutAggregationAuthorizationRequest struct {
	AuthorizedAccountID string `json:"AuthorizedAccountId"`
	AuthorizedAwsRegion string `json:"AuthorizedAwsRegion"`
	Tags                []Tag  `json:"Tags"`
}
