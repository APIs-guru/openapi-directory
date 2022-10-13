package shared

type DescribeFlowExecutionRecordsResponse struct {
	FlowExecutions []ExecutionRecord `json:"flowExecutions"`
	NextToken      *string           `json:"nextToken"`
}
