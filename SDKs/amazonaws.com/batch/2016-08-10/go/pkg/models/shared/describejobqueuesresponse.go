package shared

type DescribeJobQueuesResponse struct {
	JobQueues []JobQueueDetail `json:"jobQueues"`
	NextToken *string          `json:"nextToken"`
}
