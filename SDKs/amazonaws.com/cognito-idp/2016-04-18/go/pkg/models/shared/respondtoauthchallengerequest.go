package shared

type RespondToAuthChallengeRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata"`
	ChallengeName      ChallengeNameTypeEnum  `json:"ChallengeName"`
	ChallengeResponses map[string]string      `json:"ChallengeResponses"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata"`
	Session            *string                `json:"Session"`
	UserContextData    *UserContextDataType   `json:"UserContextData"`
}
