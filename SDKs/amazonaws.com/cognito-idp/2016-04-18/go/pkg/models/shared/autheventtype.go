package shared

import (
	"time"
)

type AuthEventType struct {
	ChallengeResponses []ChallengeResponseType `json:"ChallengeResponses"`
	CreationDate       *time.Time              `json:"CreationDate"`
	EventContextData   *EventContextDataType   `json:"EventContextData"`
	EventFeedback      *EventFeedbackType      `json:"EventFeedback"`
	EventID            *string                 `json:"EventId"`
	EventResponse      *EventResponseTypeEnum  `json:"EventResponse"`
	EventRisk          *EventRiskType          `json:"EventRisk"`
	EventType          *EventTypeEnum          `json:"EventType"`
}
