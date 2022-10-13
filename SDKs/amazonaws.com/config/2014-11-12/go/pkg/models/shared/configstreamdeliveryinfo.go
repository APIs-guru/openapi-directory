package shared

import (
	"time"
)

type ConfigStreamDeliveryInfo struct {
	LastErrorCode        *string             `json:"lastErrorCode"`
	LastErrorMessage     *string             `json:"lastErrorMessage"`
	LastStatus           *DeliveryStatusEnum `json:"lastStatus"`
	LastStatusChangeTime *time.Time          `json:"lastStatusChangeTime"`
}
