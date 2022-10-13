package shared

type DescribeStepInput struct {
	ClusterID string `json:"ClusterId"`
	StepID    string `json:"StepId"`
}
