package shared

type DescribeTaskSetsResponse struct {
	Failures []Failure `json:"failures,omitempty"`
	TaskSets []TaskSet `json:"taskSets,omitempty"`
}
