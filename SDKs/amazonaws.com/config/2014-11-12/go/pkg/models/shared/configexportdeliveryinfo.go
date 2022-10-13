package shared

import (
	"time"
)

type ConfigExportDeliveryInfo struct {
	LastAttemptTime    *time.Time          `json:"lastAttemptTime"`
	LastErrorCode      *string             `json:"lastErrorCode"`
	LastErrorMessage   *string             `json:"lastErrorMessage"`
	LastStatus         *DeliveryStatusEnum `json:"lastStatus"`
	LastSuccessfulTime *time.Time          `json:"lastSuccessfulTime"`
	NextDeliveryTime   *time.Time          `json:"nextDeliveryTime"`
}
