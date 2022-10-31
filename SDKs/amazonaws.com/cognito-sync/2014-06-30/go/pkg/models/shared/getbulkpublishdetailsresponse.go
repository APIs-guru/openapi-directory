package shared

import (
"time")

type GetBulkPublishDetailsResponse struct {
    BulkPublishCompleteTime *time.Time `json:"BulkPublishCompleteTime,omitempty"`
    BulkPublishStartTime *time.Time `json:"BulkPublishStartTime,omitempty"`
    BulkPublishStatus *BulkPublishStatusEnum `json:"BulkPublishStatus,omitempty"`
    FailureMessage *string `json:"FailureMessage,omitempty"`
    IdentityPoolID *string `json:"IdentityPoolId,omitempty"`
    
}

