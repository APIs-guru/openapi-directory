package shared

import (
	"time"
)

type MatchmakingConfiguration struct {
	AcceptanceRequired       *bool              `json:"AcceptanceRequired"`
	AcceptanceTimeoutSeconds *int64             `json:"AcceptanceTimeoutSeconds"`
	AdditionalPlayerCount    *int64             `json:"AdditionalPlayerCount"`
	BackfillMode             *BackfillModeEnum  `json:"BackfillMode"`
	ConfigurationArn         *string            `json:"ConfigurationArn"`
	CreationTime             *time.Time         `json:"CreationTime"`
	CustomEventData          *string            `json:"CustomEventData"`
	Description              *string            `json:"Description"`
	FlexMatchMode            *FlexMatchModeEnum `json:"FlexMatchMode"`
	GameProperties           []GameProperty     `json:"GameProperties"`
	GameSessionData          *string            `json:"GameSessionData"`
	GameSessionQueueArns     []string           `json:"GameSessionQueueArns"`
	Name                     *string            `json:"Name"`
	NotificationTarget       *string            `json:"NotificationTarget"`
	RequestTimeoutSeconds    *int64             `json:"RequestTimeoutSeconds"`
	RuleSetArn               *string            `json:"RuleSetArn"`
	RuleSetName              *string            `json:"RuleSetName"`
}
