package shared

type AttemptContainerDetail struct {
	ContainerInstanceArn *string            `json:"containerInstanceArn,omitempty"`
	ExitCode             *int64             `json:"exitCode,omitempty"`
	LogStreamName        *string            `json:"logStreamName,omitempty"`
	NetworkInterfaces    []NetworkInterface `json:"networkInterfaces,omitempty"`
	Reason               *string            `json:"reason,omitempty"`
	TaskArn              *string            `json:"taskArn,omitempty"`
}
