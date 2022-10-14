package shared

type DescribeJobQueuesResponse struct {
	JobQueues []JobQueueDetail `json:"jobQueues,omitempty"`
	NextToken *string          `json:"nextToken,omitempty"`
}
