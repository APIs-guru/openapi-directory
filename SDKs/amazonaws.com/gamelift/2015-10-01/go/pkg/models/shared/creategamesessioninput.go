package shared

type CreateGameSessionInput struct {
	AliasID                   *string        `json:"AliasId"`
	CreatorID                 *string        `json:"CreatorId"`
	FleetID                   *string        `json:"FleetId"`
	GameProperties            []GameProperty `json:"GameProperties"`
	GameSessionData           *string        `json:"GameSessionData"`
	GameSessionID             *string        `json:"GameSessionId"`
	IdempotencyToken          *string        `json:"IdempotencyToken"`
	Location                  *string        `json:"Location"`
	MaximumPlayerSessionCount int64          `json:"MaximumPlayerSessionCount"`
	Name                      *string        `json:"Name"`
}
