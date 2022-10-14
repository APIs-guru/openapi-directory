package shared

type DescribeContainerInstancesResponse struct {
	ContainerInstances []ContainerInstance `json:"containerInstances,omitempty"`
	Failures           []Failure           `json:"failures,omitempty"`
}
