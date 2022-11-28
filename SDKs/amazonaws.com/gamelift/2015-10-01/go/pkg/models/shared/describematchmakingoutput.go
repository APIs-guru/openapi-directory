package shared

// DescribeMatchmakingOutput
// Represents the returned data in response to a request operation.
type DescribeMatchmakingOutput struct {
	TicketList []MatchmakingTicket `json:"TicketList,omitempty"`
}
