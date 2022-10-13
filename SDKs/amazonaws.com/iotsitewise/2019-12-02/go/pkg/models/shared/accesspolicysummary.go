package shared

import (
	"time"
)

type AccessPolicySummary struct {
	CreationDate   *time.Time     `json:"creationDate"`
	ID             string         `json:"id"`
	Identity       Identity       `json:"identity"`
	LastUpdateDate *time.Time     `json:"lastUpdateDate"`
	Permission     PermissionEnum `json:"permission"`
	Resource       Resource       `json:"resource"`
}
