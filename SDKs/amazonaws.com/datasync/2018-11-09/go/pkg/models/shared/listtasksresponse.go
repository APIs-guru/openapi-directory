package shared



type ListTasksResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    Tasks []TaskListEntry `json:"Tasks,omitempty"`
    
}

