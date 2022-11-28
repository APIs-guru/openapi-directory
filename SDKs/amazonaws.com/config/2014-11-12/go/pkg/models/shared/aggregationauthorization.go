package shared

import (
	"time"
)

// AggregationAuthorization
// An object that represents the authorizations granted to aggregator accounts and regions.
type AggregationAuthorization struct {
	AggregationAuthorizationArn *string    `json:"AggregationAuthorizationArn,omitempty"`
	AuthorizedAccountID         *string    `json:"AuthorizedAccountId,omitempty"`
	AuthorizedAwsRegion         *string    `json:"AuthorizedAwsRegion,omitempty"`
	CreationTime                *time.Time `json:"CreationTime,omitempty"`
}
