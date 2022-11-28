package shared

import (
	"time"
)

// ConfigStreamDeliveryInfo
// A list that contains the status of the delivery of the configuration stream notification to the Amazon SNS topic.
type ConfigStreamDeliveryInfo struct {
	LastErrorCode        *string             `json:"lastErrorCode,omitempty"`
	LastErrorMessage     *string             `json:"lastErrorMessage,omitempty"`
	LastStatus           *DeliveryStatusEnum `json:"lastStatus,omitempty"`
	LastStatusChangeTime *time.Time          `json:"lastStatusChangeTime,omitempty"`
}
