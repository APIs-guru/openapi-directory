package shared

type DescribeContainerInstancesResponse struct {
	ContainerInstances []ContainerInstance `json:"containerInstances"`
	Failures           []Failure           `json:"failures"`
}
