package shared

// StartMatchmakingOutput
// Represents the returned data in response to a request operation.
type StartMatchmakingOutput struct {
	MatchmakingTicket *MatchmakingTicket `json:"MatchmakingTicket,omitempty"`
}
