package shared

import (
	"time"
)

type DeploymentConfigInfo struct {
	ComputePlatform      *ComputePlatformEnum  `json:"computePlatform"`
	CreateTime           *time.Time            `json:"createTime"`
	DeploymentConfigID   *string               `json:"deploymentConfigId"`
	DeploymentConfigName *string               `json:"deploymentConfigName"`
	MinimumHealthyHosts  *MinimumHealthyHosts  `json:"minimumHealthyHosts"`
	TrafficRoutingConfig *TrafficRoutingConfig `json:"trafficRoutingConfig"`
}
