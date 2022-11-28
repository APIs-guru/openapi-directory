package shared

// DescribeJobFlowsOutput
//
//	The output for the <a>DescribeJobFlows</a> operation.
type DescribeJobFlowsOutput struct {
	JobFlows []JobFlowDetail `json:"JobFlows,omitempty"`
}
