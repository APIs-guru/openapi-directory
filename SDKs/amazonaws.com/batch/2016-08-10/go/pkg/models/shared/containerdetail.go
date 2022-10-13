package shared

type ContainerDetail struct {
	Command                      []string                      `json:"command"`
	ContainerInstanceArn         *string                       `json:"containerInstanceArn"`
	Environment                  []KeyValuePair                `json:"environment"`
	ExecutionRoleArn             *string                       `json:"executionRoleArn"`
	ExitCode                     *int64                        `json:"exitCode"`
	FargatePlatformConfiguration *FargatePlatformConfiguration `json:"fargatePlatformConfiguration"`
	Image                        *string                       `json:"image"`
	InstanceType                 *string                       `json:"instanceType"`
	JobRoleArn                   *string                       `json:"jobRoleArn"`
	LinuxParameters              *LinuxParameters              `json:"linuxParameters"`
	LogConfiguration             *LogConfiguration             `json:"logConfiguration"`
	LogStreamName                *string                       `json:"logStreamName"`
	Memory                       *int64                        `json:"memory"`
	MountPoints                  []MountPoint                  `json:"mountPoints"`
	NetworkConfiguration         *NetworkConfiguration         `json:"networkConfiguration"`
	NetworkInterfaces            []NetworkInterface            `json:"networkInterfaces"`
	Privileged                   *bool                         `json:"privileged"`
	ReadonlyRootFilesystem       *bool                         `json:"readonlyRootFilesystem"`
	Reason                       *string                       `json:"reason"`
	ResourceRequirements         []ResourceRequirement         `json:"resourceRequirements"`
	Secrets                      []Secret                      `json:"secrets"`
	TaskArn                      *string                       `json:"taskArn"`
	Ulimits                      []Ulimit                      `json:"ulimits"`
	User                         *string                       `json:"user"`
	Vcpus                        *int64                        `json:"vcpus"`
	Volumes                      []Volume                      `json:"volumes"`
}
