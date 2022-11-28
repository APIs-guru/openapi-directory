package shared

import (
	"time"
)

// AccessPolicySummary
// Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
type AccessPolicySummary struct {
	CreationDate   *time.Time     `json:"creationDate,omitempty"`
	ID             string         `json:"id"`
	Identity       Identity       `json:"identity"`
	LastUpdateDate *time.Time     `json:"lastUpdateDate,omitempty"`
	Permission     PermissionEnum `json:"permission"`
	Resource       Resource       `json:"resource"`
}
