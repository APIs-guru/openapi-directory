package shared

import (
	"time"
)

type GameSession struct {
	CreationTime                *time.Time                       `json:"CreationTime"`
	CreatorID                   *string                          `json:"CreatorId"`
	CurrentPlayerSessionCount   *int64                           `json:"CurrentPlayerSessionCount"`
	DNSName                     *string                          `json:"DnsName"`
	FleetArn                    *string                          `json:"FleetArn"`
	FleetID                     *string                          `json:"FleetId"`
	GameProperties              []GameProperty                   `json:"GameProperties"`
	GameSessionData             *string                          `json:"GameSessionData"`
	GameSessionID               *string                          `json:"GameSessionId"`
	IPAddress                   *string                          `json:"IpAddress"`
	Location                    *string                          `json:"Location"`
	MatchmakerData              *string                          `json:"MatchmakerData"`
	MaximumPlayerSessionCount   *int64                           `json:"MaximumPlayerSessionCount"`
	Name                        *string                          `json:"Name"`
	PlayerSessionCreationPolicy *PlayerSessionCreationPolicyEnum `json:"PlayerSessionCreationPolicy"`
	Port                        *int64                           `json:"Port"`
	Status                      *GameSessionStatusEnum           `json:"Status"`
	StatusReason                *GameSessionStatusReasonEnum     `json:"StatusReason"`
	TerminationTime             *time.Time                       `json:"TerminationTime"`
}
