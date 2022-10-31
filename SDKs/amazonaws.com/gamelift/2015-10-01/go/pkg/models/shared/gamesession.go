package shared

import (
"time")

type GameSession struct {
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    CreatorID *string `json:"CreatorId,omitempty"`
    CurrentPlayerSessionCount *int64 `json:"CurrentPlayerSessionCount,omitempty"`
    DNSName *string `json:"DnsName,omitempty"`
    FleetArn *string `json:"FleetArn,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    GameProperties []GameProperty `json:"GameProperties,omitempty"`
    GameSessionData *string `json:"GameSessionData,omitempty"`
    GameSessionID *string `json:"GameSessionId,omitempty"`
    IPAddress *string `json:"IpAddress,omitempty"`
    Location *string `json:"Location,omitempty"`
    MatchmakerData *string `json:"MatchmakerData,omitempty"`
    MaximumPlayerSessionCount *int64 `json:"MaximumPlayerSessionCount,omitempty"`
    Name *string `json:"Name,omitempty"`
    PlayerSessionCreationPolicy *PlayerSessionCreationPolicyEnum `json:"PlayerSessionCreationPolicy,omitempty"`
    Port *int64 `json:"Port,omitempty"`
    Status *GameSessionStatusEnum `json:"Status,omitempty"`
    StatusReason *GameSessionStatusReasonEnum `json:"StatusReason,omitempty"`
    TerminationTime *time.Time `json:"TerminationTime,omitempty"`
    
}

