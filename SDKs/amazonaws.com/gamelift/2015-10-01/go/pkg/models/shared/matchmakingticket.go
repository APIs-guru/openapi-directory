package shared

import (
	"time"
)

type MatchmakingTicket struct {
	ConfigurationArn          *string                             `json:"ConfigurationArn"`
	ConfigurationName         *string                             `json:"ConfigurationName"`
	EndTime                   *time.Time                          `json:"EndTime"`
	EstimatedWaitTime         *int64                              `json:"EstimatedWaitTime"`
	GameSessionConnectionInfo *GameSessionConnectionInfo          `json:"GameSessionConnectionInfo"`
	Players                   []Player                            `json:"Players"`
	StartTime                 *time.Time                          `json:"StartTime"`
	Status                    *MatchmakingConfigurationStatusEnum `json:"Status"`
	StatusMessage             *string                             `json:"StatusMessage"`
	StatusReason              *string                             `json:"StatusReason"`
	TicketID                  *string                             `json:"TicketId"`
}
