package shared

import (
"time")

type MatchmakingConfiguration struct {
    AcceptanceRequired *bool `json:"AcceptanceRequired,omitempty"`
    AcceptanceTimeoutSeconds *int64 `json:"AcceptanceTimeoutSeconds,omitempty"`
    AdditionalPlayerCount *int64 `json:"AdditionalPlayerCount,omitempty"`
    BackfillMode *BackfillModeEnum `json:"BackfillMode,omitempty"`
    ConfigurationArn *string `json:"ConfigurationArn,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    CustomEventData *string `json:"CustomEventData,omitempty"`
    Description *string `json:"Description,omitempty"`
    FlexMatchMode *FlexMatchModeEnum `json:"FlexMatchMode,omitempty"`
    GameProperties []GameProperty `json:"GameProperties,omitempty"`
    GameSessionData *string `json:"GameSessionData,omitempty"`
    GameSessionQueueArns []string `json:"GameSessionQueueArns,omitempty"`
    Name *string `json:"Name,omitempty"`
    NotificationTarget *string `json:"NotificationTarget,omitempty"`
    RequestTimeoutSeconds *int64 `json:"RequestTimeoutSeconds,omitempty"`
    RuleSetArn *string `json:"RuleSetArn,omitempty"`
    RuleSetName *string `json:"RuleSetName,omitempty"`
    
}

