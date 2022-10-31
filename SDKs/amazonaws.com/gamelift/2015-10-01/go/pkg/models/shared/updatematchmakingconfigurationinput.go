package shared



type UpdateMatchmakingConfigurationInput struct {
    AcceptanceRequired *bool `json:"AcceptanceRequired,omitempty"`
    AcceptanceTimeoutSeconds *int64 `json:"AcceptanceTimeoutSeconds,omitempty"`
    AdditionalPlayerCount *int64 `json:"AdditionalPlayerCount,omitempty"`
    BackfillMode *BackfillModeEnum `json:"BackfillMode,omitempty"`
    CustomEventData *string `json:"CustomEventData,omitempty"`
    Description *string `json:"Description,omitempty"`
    FlexMatchMode *FlexMatchModeEnum `json:"FlexMatchMode,omitempty"`
    GameProperties []GameProperty `json:"GameProperties,omitempty"`
    GameSessionData *string `json:"GameSessionData,omitempty"`
    GameSessionQueueArns []string `json:"GameSessionQueueArns,omitempty"`
    Name string `json:"Name"`
    NotificationTarget *string `json:"NotificationTarget,omitempty"`
    RequestTimeoutSeconds *int64 `json:"RequestTimeoutSeconds,omitempty"`
    RuleSetName *string `json:"RuleSetName,omitempty"`
    
}

