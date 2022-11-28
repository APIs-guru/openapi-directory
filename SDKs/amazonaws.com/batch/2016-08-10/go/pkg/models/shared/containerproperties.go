package shared

// ContainerProperties
// Container properties are used in job definitions to describe the container that's launched as part of a job.
type ContainerProperties struct {
	Command                      []string                      `json:"command,omitempty"`
	Environment                  []KeyValuePair                `json:"environment,omitempty"`
	ExecutionRoleArn             *string                       `json:"executionRoleArn,omitempty"`
	FargatePlatformConfiguration *FargatePlatformConfiguration `json:"fargatePlatformConfiguration,omitempty"`
	Image                        *string                       `json:"image,omitempty"`
	InstanceType                 *string                       `json:"instanceType,omitempty"`
	JobRoleArn                   *string                       `json:"jobRoleArn,omitempty"`
	LinuxParameters              *LinuxParameters              `json:"linuxParameters,omitempty"`
	LogConfiguration             *LogConfiguration             `json:"logConfiguration,omitempty"`
	Memory                       *int64                        `json:"memory,omitempty"`
	MountPoints                  []MountPoint                  `json:"mountPoints,omitempty"`
	NetworkConfiguration         *NetworkConfiguration         `json:"networkConfiguration,omitempty"`
	Privileged                   *bool                         `json:"privileged,omitempty"`
	ReadonlyRootFilesystem       *bool                         `json:"readonlyRootFilesystem,omitempty"`
	ResourceRequirements         []ResourceRequirement         `json:"resourceRequirements,omitempty"`
	Secrets                      []Secret                      `json:"secrets,omitempty"`
	Ulimits                      []Ulimit                      `json:"ulimits,omitempty"`
	User                         *string                       `json:"user,omitempty"`
	Vcpus                        *int64                        `json:"vcpus,omitempty"`
	Volumes                      []Volume                      `json:"volumes,omitempty"`
}
