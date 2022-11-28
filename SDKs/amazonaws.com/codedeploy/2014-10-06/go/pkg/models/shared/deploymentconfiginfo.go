package shared

import (
	"time"
)

// DeploymentConfigInfo
// Information about a deployment configuration.
type DeploymentConfigInfo struct {
	ComputePlatform      *ComputePlatformEnum  `json:"computePlatform,omitempty"`
	CreateTime           *time.Time            `json:"createTime,omitempty"`
	DeploymentConfigID   *string               `json:"deploymentConfigId,omitempty"`
	DeploymentConfigName *string               `json:"deploymentConfigName,omitempty"`
	MinimumHealthyHosts  *MinimumHealthyHosts  `json:"minimumHealthyHosts,omitempty"`
	TrafficRoutingConfig *TrafficRoutingConfig `json:"trafficRoutingConfig,omitempty"`
}
