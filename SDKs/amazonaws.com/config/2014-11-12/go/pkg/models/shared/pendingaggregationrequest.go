package shared

// PendingAggregationRequest
// An object that represents the account ID and region of an aggregator account that is requesting authorization but is not yet authorized.
type PendingAggregationRequest struct {
	RequesterAccountID *string `json:"RequesterAccountId,omitempty"`
	RequesterAwsRegion *string `json:"RequesterAwsRegion,omitempty"`
}
