package shared

type PendingAggregationRequest struct {
	RequesterAccountID *string `json:"RequesterAccountId,omitempty"`
	RequesterAwsRegion *string `json:"RequesterAwsRegion,omitempty"`
}
