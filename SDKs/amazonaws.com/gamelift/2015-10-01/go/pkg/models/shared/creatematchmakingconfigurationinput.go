package shared

type CreateMatchmakingConfigurationInput struct {
	AcceptanceRequired       bool               `json:"AcceptanceRequired"`
	AcceptanceTimeoutSeconds *int64             `json:"AcceptanceTimeoutSeconds"`
	AdditionalPlayerCount    *int64             `json:"AdditionalPlayerCount"`
	BackfillMode             *BackfillModeEnum  `json:"BackfillMode"`
	CustomEventData          *string            `json:"CustomEventData"`
	Description              *string            `json:"Description"`
	FlexMatchMode            *FlexMatchModeEnum `json:"FlexMatchMode"`
	GameProperties           []GameProperty     `json:"GameProperties"`
	GameSessionData          *string            `json:"GameSessionData"`
	GameSessionQueueArns     []string           `json:"GameSessionQueueArns"`
	Name                     string             `json:"Name"`
	NotificationTarget       *string            `json:"NotificationTarget"`
	RequestTimeoutSeconds    int64              `json:"RequestTimeoutSeconds"`
	RuleSetName              string             `json:"RuleSetName"`
	Tags                     []Tag              `json:"Tags"`
}
