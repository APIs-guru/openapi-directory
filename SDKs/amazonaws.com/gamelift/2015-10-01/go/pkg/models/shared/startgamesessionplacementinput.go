package shared



type StartGameSessionPlacementInput struct {
    DesiredPlayerSessions []DesiredPlayerSession `json:"DesiredPlayerSessions,omitempty"`
    GameProperties []GameProperty `json:"GameProperties,omitempty"`
    GameSessionData *string `json:"GameSessionData,omitempty"`
    GameSessionName *string `json:"GameSessionName,omitempty"`
    GameSessionQueueName string `json:"GameSessionQueueName"`
    MaximumPlayerSessionCount int64 `json:"MaximumPlayerSessionCount"`
    PlacementID string `json:"PlacementId"`
    PlayerLatencies []PlayerLatency `json:"PlayerLatencies,omitempty"`
    
}

