package shared

type DescribeEnvironmentStatusResult struct {
	Message string                `json:"message"`
	Status  EnvironmentStatusEnum `json:"status"`
}
