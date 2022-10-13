package shared

type UpdateGameSessionInput struct {
	GameSessionID               string                           `json:"GameSessionId"`
	MaximumPlayerSessionCount   *int64                           `json:"MaximumPlayerSessionCount"`
	Name                        *string                          `json:"Name"`
	PlayerSessionCreationPolicy *PlayerSessionCreationPolicyEnum `json:"PlayerSessionCreationPolicy"`
	ProtectionPolicy            *ProtectionPolicyEnum            `json:"ProtectionPolicy"`
}
