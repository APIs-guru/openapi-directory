package shared

import (
	"time"
)

type ConfigStreamDeliveryInfo struct {
	LastErrorCode        *string             `json:"lastErrorCode,omitempty"`
	LastErrorMessage     *string             `json:"lastErrorMessage,omitempty"`
	LastStatus           *DeliveryStatusEnum `json:"lastStatus,omitempty"`
	LastStatusChangeTime *time.Time          `json:"lastStatusChangeTime,omitempty"`
}
