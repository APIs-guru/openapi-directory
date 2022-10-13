package shared

import (
	"time"
)

type GetBulkPublishDetailsResponse struct {
	BulkPublishCompleteTime *time.Time             `json:"BulkPublishCompleteTime"`
	BulkPublishStartTime    *time.Time             `json:"BulkPublishStartTime"`
	BulkPublishStatus       *BulkPublishStatusEnum `json:"BulkPublishStatus"`
	FailureMessage          *string                `json:"FailureMessage"`
	IdentityPoolID          *string                `json:"IdentityPoolId"`
}
