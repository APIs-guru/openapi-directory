package shared

type DescribeGameSessionQueuesOutput struct {
	GameSessionQueues []GameSessionQueue `json:"GameSessionQueues"`
	NextToken         *string            `json:"NextToken"`
}
