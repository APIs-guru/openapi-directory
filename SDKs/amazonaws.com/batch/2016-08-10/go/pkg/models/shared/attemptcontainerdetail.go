package shared

type AttemptContainerDetail struct {
	ContainerInstanceArn *string            `json:"containerInstanceArn"`
	ExitCode             *int64             `json:"exitCode"`
	LogStreamName        *string            `json:"logStreamName"`
	NetworkInterfaces    []NetworkInterface `json:"networkInterfaces"`
	Reason               *string            `json:"reason"`
	TaskArn              *string            `json:"taskArn"`
}
