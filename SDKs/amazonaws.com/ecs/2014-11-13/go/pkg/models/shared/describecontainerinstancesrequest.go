package shared

type DescribeContainerInstancesRequest struct {
	Cluster            *string                      `json:"cluster"`
	ContainerInstances []string                     `json:"containerInstances"`
	Include            []ContainerInstanceFieldEnum `json:"include"`
}
