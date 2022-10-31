package shared

type DescribeContainerInstancesRequest struct {
	Cluster            *string                      `json:"cluster,omitempty"`
	ContainerInstances []string                     `json:"containerInstances"`
	Include            []ContainerInstanceFieldEnum `json:"include,omitempty"`
}
