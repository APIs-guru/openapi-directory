package shared

import (
	"time"
)

type AggregatedSourceStatus struct {
	AwsRegion        *string                         `json:"AwsRegion"`
	LastErrorCode    *string                         `json:"LastErrorCode"`
	LastErrorMessage *string                         `json:"LastErrorMessage"`
	LastUpdateStatus *AggregatedSourceStatusTypeEnum `json:"LastUpdateStatus"`
	LastUpdateTime   *time.Time                      `json:"LastUpdateTime"`
	SourceID         *string                         `json:"SourceId"`
	SourceType       *AggregatedSourceTypeEnum       `json:"SourceType"`
}
