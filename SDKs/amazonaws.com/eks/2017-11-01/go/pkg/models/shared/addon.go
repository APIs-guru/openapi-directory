package shared

import (
	"time"
)

type Addon struct {
	AddonArn              *string           `json:"addonArn"`
	AddonName             *string           `json:"addonName"`
	AddonVersion          *string           `json:"addonVersion"`
	ClusterName           *string           `json:"clusterName"`
	CreatedAt             *time.Time        `json:"createdAt"`
	Health                *AddonHealth      `json:"health"`
	ModifiedAt            *time.Time        `json:"modifiedAt"`
	ServiceAccountRoleArn *string           `json:"serviceAccountRoleArn"`
	Status                *AddonStatusEnum  `json:"status"`
	Tags                  map[string]string `json:"tags"`
}
