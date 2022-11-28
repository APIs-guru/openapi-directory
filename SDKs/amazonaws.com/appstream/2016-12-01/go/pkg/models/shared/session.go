package shared

import (
	"time"
)

// Session
// Describes a streaming session.
type Session struct {
	AuthenticationType         *AuthenticationTypeEnum     `json:"AuthenticationType,omitempty"`
	ConnectionState            *SessionConnectionStateEnum `json:"ConnectionState,omitempty"`
	FleetName                  string                      `json:"FleetName"`
	ID                         string                      `json:"Id"`
	MaxExpirationTime          *time.Time                  `json:"MaxExpirationTime,omitempty"`
	NetworkAccessConfiguration *NetworkAccessConfiguration `json:"NetworkAccessConfiguration,omitempty"`
	StackName                  string                      `json:"StackName"`
	StartTime                  *time.Time                  `json:"StartTime,omitempty"`
	State                      SessionStateEnum            `json:"State"`
	UserID                     string                      `json:"UserId"`
}
