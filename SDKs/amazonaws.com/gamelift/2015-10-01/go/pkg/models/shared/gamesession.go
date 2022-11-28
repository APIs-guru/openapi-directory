package shared

import (
	"time"
)

// GameSession
// <p>Properties describing a game session.</p> <p>A game session in ACTIVE status can host players. When a game session ends, its status is set to <code>TERMINATED</code>. </p> <p>Once the session ends, the game session object is retained for 30 days. This means you can reuse idempotency token values after this time. Game session logs are retained for 14 days.</p> <p> <b>Related actions</b> </p> <p> <a>CreateGameSession</a> | <a>DescribeGameSessions</a> | <a>DescribeGameSessionDetails</a> | <a>SearchGameSessions</a> | <a>UpdateGameSession</a> | <a>GetGameSessionLogUrl</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a>StopGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type GameSession struct {
	CreationTime                *time.Time                       `json:"CreationTime,omitempty"`
	CreatorID                   *string                          `json:"CreatorId,omitempty"`
	CurrentPlayerSessionCount   *int64                           `json:"CurrentPlayerSessionCount,omitempty"`
	DNSName                     *string                          `json:"DnsName,omitempty"`
	FleetArn                    *string                          `json:"FleetArn,omitempty"`
	FleetID                     *string                          `json:"FleetId,omitempty"`
	GameProperties              []GameProperty                   `json:"GameProperties,omitempty"`
	GameSessionData             *string                          `json:"GameSessionData,omitempty"`
	GameSessionID               *string                          `json:"GameSessionId,omitempty"`
	IPAddress                   *string                          `json:"IpAddress,omitempty"`
	Location                    *string                          `json:"Location,omitempty"`
	MatchmakerData              *string                          `json:"MatchmakerData,omitempty"`
	MaximumPlayerSessionCount   *int64                           `json:"MaximumPlayerSessionCount,omitempty"`
	Name                        *string                          `json:"Name,omitempty"`
	PlayerSessionCreationPolicy *PlayerSessionCreationPolicyEnum `json:"PlayerSessionCreationPolicy,omitempty"`
	Port                        *int64                           `json:"Port,omitempty"`
	Status                      *GameSessionStatusEnum           `json:"Status,omitempty"`
	StatusReason                *GameSessionStatusReasonEnum     `json:"StatusReason,omitempty"`
	TerminationTime             *time.Time                       `json:"TerminationTime,omitempty"`
}
