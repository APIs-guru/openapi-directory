package shared

import (
	"time"
)

// AggregatedSourceStatus
// The current sync status between the source and the aggregator account.
type AggregatedSourceStatus struct {
	AwsRegion        *string                         `json:"AwsRegion,omitempty"`
	LastErrorCode    *string                         `json:"LastErrorCode,omitempty"`
	LastErrorMessage *string                         `json:"LastErrorMessage,omitempty"`
	LastUpdateStatus *AggregatedSourceStatusTypeEnum `json:"LastUpdateStatus,omitempty"`
	LastUpdateTime   *time.Time                      `json:"LastUpdateTime,omitempty"`
	SourceID         *string                         `json:"SourceId,omitempty"`
	SourceType       *AggregatedSourceTypeEnum       `json:"SourceType,omitempty"`
}
