package shared



type Cluster struct {
    ActiveServicesCount *int64 `json:"activeServicesCount,omitempty"`
    Attachments []Attachment `json:"attachments,omitempty"`
    AttachmentsStatus *string `json:"attachmentsStatus,omitempty"`
    CapacityProviders []string `json:"capacityProviders,omitempty"`
    ClusterArn *string `json:"clusterArn,omitempty"`
    ClusterName *string `json:"clusterName,omitempty"`
    Configuration *ClusterConfiguration `json:"configuration,omitempty"`
    DefaultCapacityProviderStrategy []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy,omitempty"`
    PendingTasksCount *int64 `json:"pendingTasksCount,omitempty"`
    RegisteredContainerInstancesCount *int64 `json:"registeredContainerInstancesCount,omitempty"`
    RunningTasksCount *int64 `json:"runningTasksCount,omitempty"`
    Settings []ClusterSetting `json:"settings,omitempty"`
    Statistics []KeyValuePair `json:"statistics,omitempty"`
    Status *string `json:"status,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

