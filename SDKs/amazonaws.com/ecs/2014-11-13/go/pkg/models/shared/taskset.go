package shared

import (
"time")

type TaskSet struct {
    CapacityProviderStrategy []CapacityProviderStrategyItem `json:"capacityProviderStrategy,omitempty"`
    ClusterArn *string `json:"clusterArn,omitempty"`
    ComputedDesiredCount *int64 `json:"computedDesiredCount,omitempty"`
    CreatedAt *time.Time `json:"createdAt,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    ID *string `json:"id,omitempty"`
    LaunchType *LaunchTypeEnum `json:"launchType,omitempty"`
    LoadBalancers []LoadBalancer `json:"loadBalancers,omitempty"`
    NetworkConfiguration *NetworkConfiguration `json:"networkConfiguration,omitempty"`
    PendingCount *int64 `json:"pendingCount,omitempty"`
    PlatformVersion *string `json:"platformVersion,omitempty"`
    RunningCount *int64 `json:"runningCount,omitempty"`
    Scale *Scale `json:"scale,omitempty"`
    ServiceArn *string `json:"serviceArn,omitempty"`
    ServiceRegistries []ServiceRegistry `json:"serviceRegistries,omitempty"`
    StabilityStatus *StabilityStatusEnum `json:"stabilityStatus,omitempty"`
    StabilityStatusAt *time.Time `json:"stabilityStatusAt,omitempty"`
    StartedBy *string `json:"startedBy,omitempty"`
    Status *string `json:"status,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    TaskDefinition *string `json:"taskDefinition,omitempty"`
    TaskSetArn *string `json:"taskSetArn,omitempty"`
    UpdatedAt *time.Time `json:"updatedAt,omitempty"`
    
}

