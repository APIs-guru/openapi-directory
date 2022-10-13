package shared

type DescribeTasksResponse struct {
	Failures []Failure `json:"failures"`
	Tasks    []Task    `json:"tasks"`
}
