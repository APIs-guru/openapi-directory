package shared

type GameSessionDetail struct {
	GameSession      *GameSession          `json:"GameSession,omitempty"`
	ProtectionPolicy *ProtectionPolicyEnum `json:"ProtectionPolicy,omitempty"`
}
