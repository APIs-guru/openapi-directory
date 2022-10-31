package shared



type CreatePlayerSessionInput struct {
    GameSessionID string `json:"GameSessionId"`
    PlayerData *string `json:"PlayerData,omitempty"`
    PlayerID string `json:"PlayerId"`
    
}

