package shared

import (
	"time"
)

type AggregationAuthorization struct {
	AggregationAuthorizationArn *string    `json:"AggregationAuthorizationArn"`
	AuthorizedAccountID         *string    `json:"AuthorizedAccountId"`
	AuthorizedAwsRegion         *string    `json:"AuthorizedAwsRegion"`
	CreationTime                *time.Time `json:"CreationTime"`
}
