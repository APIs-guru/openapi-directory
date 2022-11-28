package shared

type DescribeFlowLogsResult struct {
	FlowLogs  []FlowLog
	NextToken *string
}
