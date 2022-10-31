package shared

import (
"time")

type DeploymentConfigInfo struct {
    ComputePlatform *ComputePlatformEnum `json:"computePlatform,omitempty"`
    CreateTime *time.Time `json:"createTime,omitempty"`
    DeploymentConfigID *string `json:"deploymentConfigId,omitempty"`
    DeploymentConfigName *string `json:"deploymentConfigName,omitempty"`
    MinimumHealthyHosts *MinimumHealthyHosts `json:"minimumHealthyHosts,omitempty"`
    TrafficRoutingConfig *TrafficRoutingConfig `json:"trafficRoutingConfig,omitempty"`
    
}

