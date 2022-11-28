package shared

// DescribeGameSessionQueuesOutput
// Represents the returned data in response to a request operation.
type DescribeGameSessionQueuesOutput struct {
	GameSessionQueues []GameSessionQueue `json:"GameSessionQueues,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
