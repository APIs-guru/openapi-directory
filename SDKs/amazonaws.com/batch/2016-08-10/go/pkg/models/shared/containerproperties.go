package shared

type ContainerProperties struct {
	Command                      []string                      `json:"command"`
	Environment                  []KeyValuePair                `json:"environment"`
	ExecutionRoleArn             *string                       `json:"executionRoleArn"`
	FargatePlatformConfiguration *FargatePlatformConfiguration `json:"fargatePlatformConfiguration"`
	Image                        *string                       `json:"image"`
	InstanceType                 *string                       `json:"instanceType"`
	JobRoleArn                   *string                       `json:"jobRoleArn"`
	LinuxParameters              *LinuxParameters              `json:"linuxParameters"`
	LogConfiguration             *LogConfiguration             `json:"logConfiguration"`
	Memory                       *int64                        `json:"memory"`
	MountPoints                  []MountPoint                  `json:"mountPoints"`
	NetworkConfiguration         *NetworkConfiguration         `json:"networkConfiguration"`
	Privileged                   *bool                         `json:"privileged"`
	ReadonlyRootFilesystem       *bool                         `json:"readonlyRootFilesystem"`
	ResourceRequirements         []ResourceRequirement         `json:"resourceRequirements"`
	Secrets                      []Secret                      `json:"secrets"`
	Ulimits                      []Ulimit                      `json:"ulimits"`
	User                         *string                       `json:"user"`
	Vcpus                        *int64                        `json:"vcpus"`
	Volumes                      []Volume                      `json:"volumes"`
}
