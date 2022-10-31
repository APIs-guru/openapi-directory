package shared

type CreateMatchmakingConfigurationInput struct {
	AcceptanceRequired       bool               `json:"AcceptanceRequired"`
	AcceptanceTimeoutSeconds *int64             `json:"AcceptanceTimeoutSeconds,omitempty"`
	AdditionalPlayerCount    *int64             `json:"AdditionalPlayerCount,omitempty"`
	BackfillMode             *BackfillModeEnum  `json:"BackfillMode,omitempty"`
	CustomEventData          *string            `json:"CustomEventData,omitempty"`
	Description              *string            `json:"Description,omitempty"`
	FlexMatchMode            *FlexMatchModeEnum `json:"FlexMatchMode,omitempty"`
	GameProperties           []GameProperty     `json:"GameProperties,omitempty"`
	GameSessionData          *string            `json:"GameSessionData,omitempty"`
	GameSessionQueueArns     []string           `json:"GameSessionQueueArns,omitempty"`
	Name                     string             `json:"Name"`
	NotificationTarget       *string            `json:"NotificationTarget,omitempty"`
	RequestTimeoutSeconds    int64              `json:"RequestTimeoutSeconds"`
	RuleSetName              string             `json:"RuleSetName"`
	Tags                     []Tag              `json:"Tags,omitempty"`
}
