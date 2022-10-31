package shared

import (
	"time"
)

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
