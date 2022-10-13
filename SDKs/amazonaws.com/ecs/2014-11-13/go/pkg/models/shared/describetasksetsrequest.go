package shared

type DescribeTaskSetsRequest struct {
	Cluster  string             `json:"cluster"`
	Include  []TaskSetFieldEnum `json:"include"`
	Service  string             `json:"service"`
	TaskSets []string           `json:"taskSets"`
}
