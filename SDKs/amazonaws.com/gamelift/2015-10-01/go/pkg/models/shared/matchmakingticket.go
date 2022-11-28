package shared

import (
	"time"
)

// MatchmakingTicket
// Ticket generated to track the progress of a matchmaking request. Each ticket is uniquely identified by a ticket ID, supplied by the requester, when creating a matchmaking request with <a>StartMatchmaking</a>. Tickets can be retrieved by calling <a>DescribeMatchmaking</a> with the ticket ID.
type MatchmakingTicket struct {
	ConfigurationArn          *string                             `json:"ConfigurationArn,omitempty"`
	ConfigurationName         *string                             `json:"ConfigurationName,omitempty"`
	EndTime                   *time.Time                          `json:"EndTime,omitempty"`
	EstimatedWaitTime         *int64                              `json:"EstimatedWaitTime,omitempty"`
	GameSessionConnectionInfo *GameSessionConnectionInfo          `json:"GameSessionConnectionInfo,omitempty"`
	Players                   []Player                            `json:"Players,omitempty"`
	StartTime                 *time.Time                          `json:"StartTime,omitempty"`
	Status                    *MatchmakingConfigurationStatusEnum `json:"Status,omitempty"`
	StatusMessage             *string                             `json:"StatusMessage,omitempty"`
	StatusReason              *string                             `json:"StatusReason,omitempty"`
	TicketID                  *string                             `json:"TicketId,omitempty"`
}
