package shared

type DescribeFlowExecutionRecordsResponse struct {
	FlowExecutions []ExecutionRecord `json:"flowExecutions,omitempty"`
	NextToken      *string           `json:"nextToken,omitempty"`
}
