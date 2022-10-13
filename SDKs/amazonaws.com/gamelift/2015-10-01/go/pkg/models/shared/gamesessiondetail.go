package shared

type GameSessionDetail struct {
	GameSession      *GameSession          `json:"GameSession"`
	ProtectionPolicy *ProtectionPolicyEnum `json:"ProtectionPolicy"`
}
