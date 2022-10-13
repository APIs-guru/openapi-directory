package shared

import (
	"time"
)

type Session struct {
	AuthenticationType         *AuthenticationTypeEnum     `json:"AuthenticationType"`
	ConnectionState            *SessionConnectionStateEnum `json:"ConnectionState"`
	FleetName                  string                      `json:"FleetName"`
	ID                         string                      `json:"Id"`
	MaxExpirationTime          *time.Time                  `json:"MaxExpirationTime"`
	NetworkAccessConfiguration *NetworkAccessConfiguration `json:"NetworkAccessConfiguration"`
	StackName                  string                      `json:"StackName"`
	StartTime                  *time.Time                  `json:"StartTime"`
	State                      SessionStateEnum            `json:"State"`
	UserID                     string                      `json:"UserId"`
}
