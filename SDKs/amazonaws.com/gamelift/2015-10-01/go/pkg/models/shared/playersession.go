package shared

import (
	"time"
)

// PlayerSession
// <p>Represents a player session. Player sessions are created either for a specific game session, or as part of a game session placement or matchmaking request. A player session can represents a reserved player slot in a game session (when status is <code>RESERVED</code>) or actual player activity in a game session (when status is <code>ACTIVE</code>). A player session object, including player data, is automatically passed to a game session when the player connects to the game session and is validated. After the game session ends, player sessions information is retained for 30 days and then removed.</p> <p> <b>Related actions</b> </p> <p> <a>CreatePlayerSession</a> | <a>CreatePlayerSessions</a> | <a>DescribePlayerSessions</a> | <a>StartGameSessionPlacement</a> | <a>DescribeGameSessionPlacement</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
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
