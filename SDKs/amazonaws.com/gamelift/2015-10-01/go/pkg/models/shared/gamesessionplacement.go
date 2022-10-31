package shared

import (
	"time"
)

type GameSessionPlacement struct {
	DNSName                   *string                        `json:"DnsName,omitempty"`
	EndTime                   *time.Time                     `json:"EndTime,omitempty"`
	GameProperties            []GameProperty                 `json:"GameProperties,omitempty"`
	GameSessionArn            *string                        `json:"GameSessionArn,omitempty"`
	GameSessionData           *string                        `json:"GameSessionData,omitempty"`
	GameSessionID             *string                        `json:"GameSessionId,omitempty"`
	GameSessionName           *string                        `json:"GameSessionName,omitempty"`
	GameSessionQueueName      *string                        `json:"GameSessionQueueName,omitempty"`
	GameSessionRegion         *string                        `json:"GameSessionRegion,omitempty"`
	IPAddress                 *string                        `json:"IpAddress,omitempty"`
	MatchmakerData            *string                        `json:"MatchmakerData,omitempty"`
	MaximumPlayerSessionCount *int64                         `json:"MaximumPlayerSessionCount,omitempty"`
	PlacedPlayerSessions      []PlacedPlayerSession          `json:"PlacedPlayerSessions,omitempty"`
	PlacementID               *string                        `json:"PlacementId,omitempty"`
	PlayerLatencies           []PlayerLatency                `json:"PlayerLatencies,omitempty"`
	Port                      *int64                         `json:"Port,omitempty"`
	StartTime                 *time.Time                     `json:"StartTime,omitempty"`
	Status                    *GameSessionPlacementStateEnum `json:"Status,omitempty"`
}
