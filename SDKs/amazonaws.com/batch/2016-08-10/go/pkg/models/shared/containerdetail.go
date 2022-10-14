package shared

type ContainerDetail struct {
	Command                      []string                      `json:"command,omitempty"`
	ContainerInstanceArn         *string                       `json:"containerInstanceArn,omitempty"`
	Environment                  []KeyValuePair                `json:"environment,omitempty"`
	ExecutionRoleArn             *string                       `json:"executionRoleArn,omitempty"`
	ExitCode                     *int64                        `json:"exitCode,omitempty"`
	FargatePlatformConfiguration *FargatePlatformConfiguration `json:"fargatePlatformConfiguration,omitempty"`
	Image                        *string                       `json:"image,omitempty"`
	InstanceType                 *string                       `json:"instanceType,omitempty"`
	JobRoleArn                   *string                       `json:"jobRoleArn,omitempty"`
	LinuxParameters              *LinuxParameters              `json:"linuxParameters,omitempty"`
	LogConfiguration             *LogConfiguration             `json:"logConfiguration,omitempty"`
	LogStreamName                *string                       `json:"logStreamName,omitempty"`
	Memory                       *int64                        `json:"memory,omitempty"`
	MountPoints                  []MountPoint                  `json:"mountPoints,omitempty"`
	NetworkConfiguration         *NetworkConfiguration         `json:"networkConfiguration,omitempty"`
	NetworkInterfaces            []NetworkInterface            `json:"networkInterfaces,omitempty"`
	Privileged                   *bool                         `json:"privileged,omitempty"`
	ReadonlyRootFilesystem       *bool                         `json:"readonlyRootFilesystem,omitempty"`
	Reason                       *string                       `json:"reason,omitempty"`
	ResourceRequirements         []ResourceRequirement         `json:"resourceRequirements,omitempty"`
	Secrets                      []Secret                      `json:"secrets,omitempty"`
	TaskArn                      *string                       `json:"taskArn,omitempty"`
	Ulimits                      []Ulimit                      `json:"ulimits,omitempty"`
	User                         *string                       `json:"user,omitempty"`
	Vcpus                        *int64                        `json:"vcpus,omitempty"`
	Volumes                      []Volume                      `json:"volumes,omitempty"`
}
