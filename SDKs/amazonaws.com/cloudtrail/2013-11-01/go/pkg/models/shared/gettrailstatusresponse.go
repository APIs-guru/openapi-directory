package shared

import (
	"time"
)

type GetTrailStatusResponse struct {
	IsLogging                          *bool      `json:"IsLogging"`
	LatestCloudWatchLogsDeliveryError  *string    `json:"LatestCloudWatchLogsDeliveryError"`
	LatestCloudWatchLogsDeliveryTime   *time.Time `json:"LatestCloudWatchLogsDeliveryTime"`
	LatestDeliveryAttemptSucceeded     *string    `json:"LatestDeliveryAttemptSucceeded"`
	LatestDeliveryAttemptTime          *string    `json:"LatestDeliveryAttemptTime"`
	LatestDeliveryError                *string    `json:"LatestDeliveryError"`
	LatestDeliveryTime                 *time.Time `json:"LatestDeliveryTime"`
	LatestDigestDeliveryError          *string    `json:"LatestDigestDeliveryError"`
	LatestDigestDeliveryTime           *time.Time `json:"LatestDigestDeliveryTime"`
	LatestNotificationAttemptSucceeded *string    `json:"LatestNotificationAttemptSucceeded"`
	LatestNotificationAttemptTime      *string    `json:"LatestNotificationAttemptTime"`
	LatestNotificationError            *string    `json:"LatestNotificationError"`
	LatestNotificationTime             *time.Time `json:"LatestNotificationTime"`
	StartLoggingTime                   *time.Time `json:"StartLoggingTime"`
	StopLoggingTime                    *time.Time `json:"StopLoggingTime"`
	TimeLoggingStarted                 *string    `json:"TimeLoggingStarted"`
	TimeLoggingStopped                 *string    `json:"TimeLoggingStopped"`
}
