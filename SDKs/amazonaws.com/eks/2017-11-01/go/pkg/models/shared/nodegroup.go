package shared

import (
	"time"
)

type Nodegroup struct {
	AmiType        *AmiTypesEnum                `json:"amiType"`
	CapacityType   *CapacityTypesEnum           `json:"capacityType"`
	ClusterName    *string                      `json:"clusterName"`
	CreatedAt      *time.Time                   `json:"createdAt"`
	DiskSize       *int64                       `json:"diskSize"`
	Health         *NodegroupHealth             `json:"health"`
	InstanceTypes  []string                     `json:"instanceTypes"`
	Labels         map[string]string            `json:"labels"`
	LaunchTemplate *LaunchTemplateSpecification `json:"launchTemplate"`
	ModifiedAt     *time.Time                   `json:"modifiedAt"`
	NodeRole       *string                      `json:"nodeRole"`
	NodegroupArn   *string                      `json:"nodegroupArn"`
	NodegroupName  *string                      `json:"nodegroupName"`
	ReleaseVersion *string                      `json:"releaseVersion"`
	RemoteAccess   *RemoteAccessConfig          `json:"remoteAccess"`
	Resources      *NodegroupResources          `json:"resources"`
	ScalingConfig  *NodegroupScalingConfig      `json:"scalingConfig"`
	Status         *NodegroupStatusEnum         `json:"status"`
	Subnets        []string                     `json:"subnets"`
	Tags           map[string]string            `json:"tags"`
	Taints         []Taint                      `json:"taints"`
	UpdateConfig   *NodegroupUpdateConfig       `json:"updateConfig"`
	Version        *string                      `json:"version"`
}
