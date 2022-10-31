package shared

type DescribeTasksRequest struct {
	Cluster *string         `json:"cluster,omitempty"`
	Include []TaskFieldEnum `json:"include,omitempty"`
	Tasks   []string        `json:"tasks"`
}
