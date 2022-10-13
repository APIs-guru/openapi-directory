package shared

import (
	"time"
)

type PlayerSession struct {
	CreationTime    *time.Time               `json:"CreationTime"`
	DNSName         *string                  `json:"DnsName"`
	FleetArn        *string                  `json:"FleetArn"`
	FleetID         *string                  `json:"FleetId"`
	GameSessionID   *string                  `json:"GameSessionId"`
	IPAddress       *string                  `json:"IpAddress"`
	PlayerData      *string                  `json:"PlayerData"`
	PlayerID        *string                  `json:"PlayerId"`
	PlayerSessionID *string                  `json:"PlayerSessionId"`
	Port            *int64                   `json:"Port"`
	Status          *PlayerSessionStatusEnum `json:"Status"`
	TerminationTime *time.Time               `json:"TerminationTime"`
}
