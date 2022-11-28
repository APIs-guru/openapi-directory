package shared

// RespondToAuthChallengeRequest
// The request to respond to an authentication challenge.
type RespondToAuthChallengeRequest struct {
	AnalyticsMetadata  *AnalyticsMetadataType `json:"AnalyticsMetadata,omitempty"`
	ChallengeName      ChallengeNameTypeEnum  `json:"ChallengeName"`
	ChallengeResponses map[string]string      `json:"ChallengeResponses,omitempty"`
	ClientID           string                 `json:"ClientId"`
	ClientMetadata     map[string]string      `json:"ClientMetadata,omitempty"`
	Session            *string                `json:"Session,omitempty"`
	UserContextData    *UserContextDataType   `json:"UserContextData,omitempty"`
}
