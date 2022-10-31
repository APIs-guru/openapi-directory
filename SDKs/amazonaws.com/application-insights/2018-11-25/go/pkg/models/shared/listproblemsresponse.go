package shared



type ListProblemsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ProblemList []Problem `json:"ProblemList,omitempty"`
    
}

