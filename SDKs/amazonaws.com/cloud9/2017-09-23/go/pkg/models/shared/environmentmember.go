package shared

import (
	"time"
)

// EnvironmentMember
// Information about an environment member for an Cloud9 development environment.
type EnvironmentMember struct {
	EnvironmentID string          `json:"environmentId"`
	LastAccess    *time.Time      `json:"lastAccess,omitempty"`
	Permissions   PermissionsEnum `json:"permissions"`
	UserArn       string          `json:"userArn"`
	UserID        string          `json:"userId"`
}
