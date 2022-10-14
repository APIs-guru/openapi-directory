package shared

import (
	"time"
)

type ConfigExportDeliveryInfo struct {
	LastAttemptTime    *time.Time          `json:"lastAttemptTime,omitempty"`
	LastErrorCode      *string             `json:"lastErrorCode,omitempty"`
	LastErrorMessage   *string             `json:"lastErrorMessage,omitempty"`
	LastStatus         *DeliveryStatusEnum `json:"lastStatus,omitempty"`
	LastSuccessfulTime *time.Time          `json:"lastSuccessfulTime,omitempty"`
	NextDeliveryTime   *time.Time          `json:"nextDeliveryTime,omitempty"`
}
