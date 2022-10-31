package shared

import (
"time")

type AssessmentRunNotification struct {
    Date time.Time `json:"date"`
    Error bool `json:"error"`
    Event InspectorEventEnum `json:"event"`
    Message *string `json:"message,omitempty"`
    SnsPublishStatusCode *AssessmentRunNotificationSnsStatusCodeEnum `json:"snsPublishStatusCode,omitempty"`
    SnsTopicArn *string `json:"snsTopicArn,omitempty"`
    
}

