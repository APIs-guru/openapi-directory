package shared

// UpdateGameSessionInput
// Represents the input for a request operation.
type UpdateGameSessionInput struct {
	GameSessionID               string                           `json:"GameSessionId"`
	MaximumPlayerSessionCount   *int64                           `json:"MaximumPlayerSessionCount,omitempty"`
	Name                        *string                          `json:"Name,omitempty"`
	PlayerSessionCreationPolicy *PlayerSessionCreationPolicyEnum `json:"PlayerSessionCreationPolicy,omitempty"`
	ProtectionPolicy            *ProtectionPolicyEnum            `json:"ProtectionPolicy,omitempty"`
}
