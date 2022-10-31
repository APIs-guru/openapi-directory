package shared



type DescribeGameSessionQueuesOutput struct {
    GameSessionQueues []GameSessionQueue `json:"GameSessionQueues,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

