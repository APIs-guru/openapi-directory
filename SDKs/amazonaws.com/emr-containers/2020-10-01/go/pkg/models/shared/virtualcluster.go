package shared

import (
	"time"
)

type VirtualCluster struct {
	Arn               *string                  `json:"arn,omitempty"`
	ContainerProvider *ContainerProvider       `json:"containerProvider,omitempty"`
	CreatedAt         *time.Time               `json:"createdAt,omitempty"`
	ID                *string                  `json:"id,omitempty"`
	Name              *string                  `json:"name,omitempty"`
	State             *VirtualClusterStateEnum `json:"state,omitempty"`
	Tags              map[string]string        `json:"tags,omitempty"`
}
