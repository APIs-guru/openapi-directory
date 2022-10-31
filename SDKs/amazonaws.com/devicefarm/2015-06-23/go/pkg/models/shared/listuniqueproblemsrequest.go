package shared



type ListUniqueProblemsRequest struct {
    Arn string `json:"arn"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

