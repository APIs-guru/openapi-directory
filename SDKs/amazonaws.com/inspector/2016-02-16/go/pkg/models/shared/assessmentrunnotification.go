package shared

import (
	"time"
)

type AssessmentRunNotification struct {
	Date                 time.Time                                   `json:"date"`
	Error                bool                                        `json:"error"`
	Event                InspectorEventEnum                          `json:"event"`
	Message              *string                                     `json:"message"`
	SnsPublishStatusCode *AssessmentRunNotificationSnsStatusCodeEnum `json:"snsPublishStatusCode"`
	SnsTopicArn          *string                                     `json:"snsTopicArn"`
}
