package shared

type DescribeTasksRequest struct {
	Cluster *string         `json:"cluster"`
	Include []TaskFieldEnum `json:"include"`
	Tasks   []string        `json:"tasks"`
}
