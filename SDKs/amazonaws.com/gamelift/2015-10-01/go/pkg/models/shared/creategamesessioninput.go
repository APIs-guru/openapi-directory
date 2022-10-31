package shared

type CreateGameSessionInput struct {
	AliasID                   *string        `json:"AliasId,omitempty"`
	CreatorID                 *string        `json:"CreatorId,omitempty"`
	FleetID                   *string        `json:"FleetId,omitempty"`
	GameProperties            []GameProperty `json:"GameProperties,omitempty"`
	GameSessionData           *string        `json:"GameSessionData,omitempty"`
	GameSessionID             *string        `json:"GameSessionId,omitempty"`
	IdempotencyToken          *string        `json:"IdempotencyToken,omitempty"`
	Location                  *string        `json:"Location,omitempty"`
	MaximumPlayerSessionCount int64          `json:"MaximumPlayerSessionCount"`
	Name                      *string        `json:"Name,omitempty"`
}
