package shared



type ListThingRegistrationTasksResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    TaskIds []string `json:"taskIds,omitempty"`
    
}

