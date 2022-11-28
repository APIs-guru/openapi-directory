package shared

// GameSessionDetail
// A game session's properties plus the protection policy currently in force.
type GameSessionDetail struct {
	GameSession      *GameSession          `json:"GameSession,omitempty"`
	ProtectionPolicy *ProtectionPolicyEnum `json:"ProtectionPolicy,omitempty"`
}
