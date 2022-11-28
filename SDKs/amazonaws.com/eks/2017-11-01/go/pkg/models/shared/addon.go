package shared

import (
	"time"
)

// Addon
// An Amazon EKS add-on.
type Addon struct {
	AddonArn              *string           `json:"addonArn,omitempty"`
	AddonName             *string           `json:"addonName,omitempty"`
	AddonVersion          *string           `json:"addonVersion,omitempty"`
	ClusterName           *string           `json:"clusterName,omitempty"`
	CreatedAt             *time.Time        `json:"createdAt,omitempty"`
	Health                *AddonHealth      `json:"health,omitempty"`
	ModifiedAt            *time.Time        `json:"modifiedAt,omitempty"`
	ServiceAccountRoleArn *string           `json:"serviceAccountRoleArn,omitempty"`
	Status                *AddonStatusEnum  `json:"status,omitempty"`
	Tags                  map[string]string `json:"tags,omitempty"`
}
