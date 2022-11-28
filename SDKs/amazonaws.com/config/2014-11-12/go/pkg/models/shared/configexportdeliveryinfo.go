package shared

import (
	"time"
)

// ConfigExportDeliveryInfo
// Provides status of the delivery of the snapshot or the configuration history to the specified Amazon S3 bucket. Also provides the status of notifications about the Amazon S3 delivery to the specified Amazon SNS topic.
type ConfigExportDeliveryInfo struct {
	LastAttemptTime    *time.Time          `json:"lastAttemptTime,omitempty"`
	LastErrorCode      *string             `json:"lastErrorCode,omitempty"`
	LastErrorMessage   *string             `json:"lastErrorMessage,omitempty"`
	LastStatus         *DeliveryStatusEnum `json:"lastStatus,omitempty"`
	LastSuccessfulTime *time.Time          `json:"lastSuccessfulTime,omitempty"`
	NextDeliveryTime   *time.Time          `json:"nextDeliveryTime,omitempty"`
}
