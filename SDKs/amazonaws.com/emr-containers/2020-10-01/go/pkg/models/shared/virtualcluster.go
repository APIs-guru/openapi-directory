package shared

import (
	"time"
)

// VirtualCluster
// This entity describes a virtual cluster. A virtual cluster is a Kubernetes namespace that Amazon EMR is registered with. Amazon EMR uses virtual clusters to run jobs and host endpoints. Multiple virtual clusters can be backed by the same physical cluster. However, each virtual cluster maps to one namespace on an EKS cluster. Virtual clusters do not create any active resources that contribute to your bill or that require lifecycle management outside the service.
type VirtualCluster struct {
	Arn               *string                  `json:"arn,omitempty"`
	ContainerProvider *ContainerProvider       `json:"containerProvider,omitempty"`
	CreatedAt         *time.Time               `json:"createdAt,omitempty"`
	ID                *string                  `json:"id,omitempty"`
	Name              *string                  `json:"name,omitempty"`
	State             *VirtualClusterStateEnum `json:"state,omitempty"`
	Tags              map[string]string        `json:"tags,omitempty"`
}
