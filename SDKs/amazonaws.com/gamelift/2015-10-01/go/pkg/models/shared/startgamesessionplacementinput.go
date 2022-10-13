package shared

type StartGameSessionPlacementInput struct {
	DesiredPlayerSessions     []DesiredPlayerSession `json:"DesiredPlayerSessions"`
	GameProperties            []GameProperty         `json:"GameProperties"`
	GameSessionData           *string                `json:"GameSessionData"`
	GameSessionName           *string                `json:"GameSessionName"`
	GameSessionQueueName      string                 `json:"GameSessionQueueName"`
	MaximumPlayerSessionCount int64                  `json:"MaximumPlayerSessionCount"`
	PlacementID               string                 `json:"PlacementId"`
	PlayerLatencies           []PlayerLatency        `json:"PlayerLatencies"`
}
