package shared

// AdminRespondToAuthChallengeRequest
// The request to respond to the authentication challenge, as an administrator.
type AdminRespondToAuthChallengeRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ChallengeName      ChallengeNameTypeEnum  `json:"ChallengeName"`
	ChallengeResponses map[string]string      `json:"ChallengeResponses,omitempty"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata,omitempty"`
	ContextData        *ContextDataType       `json:"ContextData,omitempty"`
	Session            *string                `json:"Session,omitempty"`
	UserPoolID         string                 `json:"UserPoolId"`
}
