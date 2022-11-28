package shared

// Cluster
// A regional grouping of one or more container instances on which you can run task requests. Each account receives a default cluster the first time you use the Amazon ECS service, but you may also create other clusters. Clusters may contain more than one instance type simultaneously.
type Cluster struct {
	ActiveServicesCount               *int64                         `json:"activeServicesCount,omitempty"`
	Attachments                       []Attachment                   `json:"attachments,omitempty"`
	AttachmentsStatus                 *string                        `json:"attachmentsStatus,omitempty"`
	CapacityProviders                 []string                       `json:"capacityProviders,omitempty"`
	ClusterArn                        *string                        `json:"clusterArn,omitempty"`
	ClusterName                       *string                        `json:"clusterName,omitempty"`
	Configuration                     *ClusterConfiguration          `json:"configuration,omitempty"`
	DefaultCapacityProviderStrategy   []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy,omitempty"`
	PendingTasksCount                 *int64                         `json:"pendingTasksCount,omitempty"`
	RegisteredContainerInstancesCount *int64                         `json:"registeredContainerInstancesCount,omitempty"`
	RunningTasksCount                 *int64                         `json:"runningTasksCount,omitempty"`
	Settings                          []ClusterSetting               `json:"settings,omitempty"`
	Statistics                        []KeyValuePair                 `json:"statistics,omitempty"`
	Status                            *string                        `json:"status,omitempty"`
	Tags                              []Tag                          `json:"tags,omitempty"`
}
