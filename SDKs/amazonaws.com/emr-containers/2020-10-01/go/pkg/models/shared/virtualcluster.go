package shared

import (
	"time"
)

type VirtualCluster struct {
	Arn               *string                  `json:"arn"`
	ContainerProvider *ContainerProvider       `json:"containerProvider"`
	CreatedAt         *time.Time               `json:"createdAt"`
	ID                *string                  `json:"id"`
	Name              *string                  `json:"name"`
	State             *VirtualClusterStateEnum `json:"state"`
	Tags              map[string]string        `json:"tags"`
}
