package shared

import (
	"time"
)

type GetTrailStatusResponse struct {
	IsLogging                          *bool      `json:"IsLogging,omitempty"`
	LatestCloudWatchLogsDeliveryError  *string    `json:"LatestCloudWatchLogsDeliveryError,omitempty"`
	LatestCloudWatchLogsDeliveryTime   *time.Time `json:"LatestCloudWatchLogsDeliveryTime,omitempty"`
	LatestDeliveryAttemptSucceeded     *string    `json:"LatestDeliveryAttemptSucceeded,omitempty"`
	LatestDeliveryAttemptTime          *string    `json:"LatestDeliveryAttemptTime,omitempty"`
	LatestDeliveryError                *string    `json:"LatestDeliveryError,omitempty"`
	LatestDeliveryTime                 *time.Time `json:"LatestDeliveryTime,omitempty"`
	LatestDigestDeliveryError          *string    `json:"LatestDigestDeliveryError,omitempty"`
	LatestDigestDeliveryTime           *time.Time `json:"LatestDigestDeliveryTime,omitempty"`
	LatestNotificationAttemptSucceeded *string    `json:"LatestNotificationAttemptSucceeded,omitempty"`
	LatestNotificationAttemptTime      *string    `json:"LatestNotificationAttemptTime,omitempty"`
	LatestNotificationError            *string    `json:"LatestNotificationError,omitempty"`
	LatestNotificationTime             *time.Time `json:"LatestNotificationTime,omitempty"`
	StartLoggingTime                   *time.Time `json:"StartLoggingTime,omitempty"`
	StopLoggingTime                    *time.Time `json:"StopLoggingTime,omitempty"`
	TimeLoggingStarted                 *string    `json:"TimeLoggingStarted,omitempty"`
	TimeLoggingStopped                 *string    `json:"TimeLoggingStopped,omitempty"`
}
