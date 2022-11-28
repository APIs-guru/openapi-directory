package shared

type CreateFlowLogsResult struct {
	ClientToken  *string
	FlowLogIds   []string
	Unsuccessful []UnsuccessfulItem
}
