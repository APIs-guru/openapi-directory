package shared

type AdminRespondToAuthChallengeRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ChallengeName      ChallengeNameTypeEnum  `json:"ChallengeName"`
	ChallengeResponses map[string]string      `json:"ChallengeResponses"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata"`
	ContextData        *ContextDataType       `json:"ContextData"`
	Session            *string                `json:"Session"`
	UserPoolID         string                 `json:"UserPoolId"`
}
