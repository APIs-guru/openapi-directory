package shared

type DescribeTaskSetsResponse struct {
	Failures []Failure `json:"failures"`
	TaskSets []TaskSet `json:"taskSets"`
}
