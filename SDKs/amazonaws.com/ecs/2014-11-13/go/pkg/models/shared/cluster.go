package shared

type Cluster struct {
	ActiveServicesCount               *int64                         `json:"activeServicesCount"`
	Attachments                       []Attachment                   `json:"attachments"`
	AttachmentsStatus                 *string                        `json:"attachmentsStatus"`
	CapacityProviders                 []string                       `json:"capacityProviders"`
	ClusterArn                        *string                        `json:"clusterArn"`
	ClusterName                       *string                        `json:"clusterName"`
	Configuration                     *ClusterConfiguration          `json:"configuration"`
	DefaultCapacityProviderStrategy   []CapacityProviderStrategyItem `json:"defaultCapacityProviderStrategy"`
	PendingTasksCount                 *int64                         `json:"pendingTasksCount"`
	RegisteredContainerInstancesCount *int64                         `json:"registeredContainerInstancesCount"`
	RunningTasksCount                 *int64                         `json:"runningTasksCount"`
	Settings                          []ClusterSetting               `json:"settings"`
	Statistics                        []KeyValuePair                 `json:"statistics"`
	Status                            *string                        `json:"status"`
	Tags                              []Tag                          `json:"tags"`
}
