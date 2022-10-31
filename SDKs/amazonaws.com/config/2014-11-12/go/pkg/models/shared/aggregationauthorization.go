package shared

import (
"time")

type AggregationAuthorization struct {
    AggregationAuthorizationArn *string `json:"AggregationAuthorizationArn,omitempty"`
    AuthorizedAccountID *string `json:"AuthorizedAccountId,omitempty"`
    AuthorizedAwsRegion *string `json:"AuthorizedAwsRegion,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    
}

