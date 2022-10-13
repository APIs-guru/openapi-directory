package shared

import (
	"time"
)

type GameSessionPlacement struct {
	DNSName                   *string                        `json:"DnsName"`
	EndTime                   *time.Time                     `json:"EndTime"`
	GameProperties            []GameProperty                 `json:"GameProperties"`
	GameSessionArn            *string                        `json:"GameSessionArn"`
	GameSessionData           *string                        `json:"GameSessionData"`
	GameSessionID             *string                        `json:"GameSessionId"`
	GameSessionName           *string                        `json:"GameSessionName"`
	GameSessionQueueName      *string                        `json:"GameSessionQueueName"`
	GameSessionRegion         *string                        `json:"GameSessionRegion"`
	IPAddress                 *string                        `json:"IpAddress"`
	MatchmakerData            *string                        `json:"MatchmakerData"`
	MaximumPlayerSessionCount *int64                         `json:"MaximumPlayerSessionCount"`
	PlacedPlayerSessions      []PlacedPlayerSession          `json:"PlacedPlayerSessions"`
	PlacementID               *string                        `json:"PlacementId"`
	PlayerLatencies           []PlayerLatency                `json:"PlayerLatencies"`
	Port                      *int64                         `json:"Port"`
	StartTime                 *time.Time                     `json:"StartTime"`
	Status                    *GameSessionPlacementStateEnum `json:"Status"`
}
