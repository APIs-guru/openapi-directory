package shared

type ListContainerInstancesResponse struct {
	ContainerInstanceArns []string `json:"containerInstanceArns"`
	NextToken             *string  `json:"nextToken"`
}
