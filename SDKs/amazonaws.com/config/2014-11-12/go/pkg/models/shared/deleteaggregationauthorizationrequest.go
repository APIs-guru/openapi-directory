package shared

type DeleteAggregationAuthorizationRequest struct {
	AuthorizedAccountID string `json:"AuthorizedAccountId"`
	AuthorizedAwsRegion string `json:"AuthorizedAwsRegion"`
}
