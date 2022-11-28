package shared

// DescribeStepInput
// This input determines which step to describe.
type DescribeStepInput struct {
	ClusterID string `json:"ClusterId"`
	StepID    string `json:"StepId"`
}
