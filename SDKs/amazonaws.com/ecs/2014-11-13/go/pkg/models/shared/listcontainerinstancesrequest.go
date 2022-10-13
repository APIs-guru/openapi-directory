package shared

type ListContainerInstancesRequest struct {
	Cluster    *string                      `json:"cluster"`
	Filter     *string                      `json:"filter"`
	MaxResults *int64                       `json:"maxResults"`
	NextToken  *string                      `json:"nextToken"`
	Status     *ContainerInstanceStatusEnum `json:"status"`
}
