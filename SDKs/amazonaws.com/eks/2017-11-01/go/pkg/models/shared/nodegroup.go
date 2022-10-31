package shared

import (
"time")

type Nodegroup struct {
    AmiType *AmiTypesEnum `json:"amiType,omitempty"`
    CapacityType *CapacityTypesEnum `json:"capacityType,omitempty"`
    ClusterName *string `json:"clusterName,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    DiskSize *int64 `json:"diskSize,omitempty"`
    Health *NodegroupHealth `json:"health,omitempty"`
    InstanceTypes []string `json:"instanceTypes,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    LaunchTemplate *LaunchTemplateSpecification `json:"launchTemplate,omitempty"`
    ModifiedAt *time.Time `json:"modifiedAt,omitempty"`
    NodeRole *string `json:"nodeRole,omitempty"`
    NodegroupArn *string `json:"nodegroupArn,omitempty"`
    NodegroupName *string `json:"nodegroupName,omitempty"`
    ReleaseVersion *string `json:"releaseVersion,omitempty"`
    RemoteAccess *RemoteAccessConfig `json:"remoteAccess,omitempty"`
    Resources *NodegroupResources `json:"resources,omitempty"`
    ScalingConfig *NodegroupScalingConfig `json:"scalingConfig,omitempty"`
    Status *NodegroupStatusEnum `json:"status,omitempty"`
    Subnets []string `json:"subnets,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    Taints []Taint `json:"taints,omitempty"`
    UpdateConfig *NodegroupUpdateConfig `json:"updateConfig,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

