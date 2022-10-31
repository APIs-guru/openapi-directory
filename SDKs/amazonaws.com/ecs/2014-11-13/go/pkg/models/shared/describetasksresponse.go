package shared



type DescribeTasksResponse struct {
    Failures []Failure `json:"failures,omitempty"`
    Tasks []Task `json:"tasks,omitempty"`
    
}

