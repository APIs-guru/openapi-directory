package shared

import (
	"time"
)

type PlayerSession struct {
	CreationTime    *time.Time               `json:"CreationTime,omitempty"`
	DNSName         *string                  `json:"DnsName,omitempty"`
	FleetArn        *string                  `json:"FleetArn,omitempty"`
	FleetID         *string                  `json:"FleetId,omitempty"`
	GameSessionID   *string                  `json:"GameSessionId,omitempty"`
	IPAddress       *string                  `json:"IpAddress,omitempty"`
	PlayerData      *string                  `json:"PlayerData,omitempty"`
	PlayerID        *string                  `json:"PlayerId,omitempty"`
	PlayerSessionID *string                  `json:"PlayerSessionId,omitempty"`
	Port            *int64                   `json:"Port,omitempty"`
	Status          *PlayerSessionStatusEnum `json:"Status,omitempty"`
	TerminationTime *time.Time               `json:"TerminationTime,omitempty"`
}
