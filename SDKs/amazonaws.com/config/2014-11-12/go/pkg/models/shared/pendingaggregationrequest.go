package shared

type PendingAggregationRequest struct {
	RequesterAccountID *string `json:"RequesterAccountId"`
	RequesterAwsRegion *string `json:"RequesterAwsRegion"`
}
