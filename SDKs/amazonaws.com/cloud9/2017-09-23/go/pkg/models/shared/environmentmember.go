package shared

import (
	"time"
)

type EnvironmentMember struct {
	EnvironmentID string          `json:"environmentId"`
	LastAccess    *time.Time      `json:"lastAccess"`
	Permissions   PermissionsEnum `json:"permissions"`
	UserArn       string          `json:"userArn"`
	UserID        string          `json:"userId"`
}
