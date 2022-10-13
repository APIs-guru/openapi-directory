package shared

type DescribeComputeEnvironmentsResponse struct {
	ComputeEnvironments []ComputeEnvironmentDetail `json:"computeEnvironments"`
	NextToken           *string                    `json:"nextToken"`
}
