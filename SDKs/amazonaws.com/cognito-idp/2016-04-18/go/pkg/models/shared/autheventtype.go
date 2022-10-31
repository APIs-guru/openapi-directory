package shared

import (
"time")

type AuthEventType struct {
    ChallengeResponses []ChallengeResponseType `json:"ChallengeResponses,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    EventContextData *EventContextDataType `json:"EventContextData,omitempty"`
    EventFeedback *EventFeedbackType `json:"EventFeedback,omitempty"`
    EventID *string `json:"EventId,omitempty"`
    EventResponse *EventResponseTypeEnum `json:"EventResponse,omitempty"`
    EventRisk *EventRiskType `json:"EventRisk,omitempty"`
    EventType *EventTypeEnum `json:"EventType,omitempty"`
    
}

