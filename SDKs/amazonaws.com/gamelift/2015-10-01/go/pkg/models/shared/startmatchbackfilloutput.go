package shared

// StartMatchBackfillOutput
// Represents the returned data in response to a request operation.
type StartMatchBackfillOutput struct {
	MatchmakingTicket *MatchmakingTicket `json:"MatchmakingTicket,omitempty"`
}
