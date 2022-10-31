package shared

type ContainerDefinition struct {
	Command                []string               `json:"command,omitempty"`
	CPU                    *int64                 `json:"cpu,omitempty"`
	DependsOn              []ContainerDependency  `json:"dependsOn,omitempty"`
	DisableNetworking      *bool                  `json:"disableNetworking,omitempty"`
	DNSSearchDomains       []string               `json:"dnsSearchDomains,omitempty"`
	DNSServers             []string               `json:"dnsServers,omitempty"`
	DockerLabels           map[string]string      `json:"dockerLabels,omitempty"`
	DockerSecurityOptions  []string               `json:"dockerSecurityOptions,omitempty"`
	EntryPoint             []string               `json:"entryPoint,omitempty"`
	Environment            []KeyValuePair         `json:"environment,omitempty"`
	EnvironmentFiles       []EnvironmentFile      `json:"environmentFiles,omitempty"`
	Essential              *bool                  `json:"essential,omitempty"`
	ExtraHosts             []HostEntry            `json:"extraHosts,omitempty"`
	FirelensConfiguration  *FirelensConfiguration `json:"firelensConfiguration,omitempty"`
	HealthCheck            *HealthCheck           `json:"healthCheck,omitempty"`
	Hostname               *string                `json:"hostname,omitempty"`
	Image                  *string                `json:"image,omitempty"`
	Interactive            *bool                  `json:"interactive,omitempty"`
	Links                  []string               `json:"links,omitempty"`
	LinuxParameters        *LinuxParameters       `json:"linuxParameters,omitempty"`
	LogConfiguration       *LogConfiguration      `json:"logConfiguration,omitempty"`
	Memory                 *int64                 `json:"memory,omitempty"`
	MemoryReservation      *int64                 `json:"memoryReservation,omitempty"`
	MountPoints            []MountPoint           `json:"mountPoints,omitempty"`
	Name                   *string                `json:"name,omitempty"`
	PortMappings           []PortMapping          `json:"portMappings,omitempty"`
	Privileged             *bool                  `json:"privileged,omitempty"`
	PseudoTerminal         *bool                  `json:"pseudoTerminal,omitempty"`
	ReadonlyRootFilesystem *bool                  `json:"readonlyRootFilesystem,omitempty"`
	RepositoryCredentials  *RepositoryCredentials `json:"repositoryCredentials,omitempty"`
	ResourceRequirements   []ResourceRequirement  `json:"resourceRequirements,omitempty"`
	Secrets                []Secret               `json:"secrets,omitempty"`
	StartTimeout           *int64                 `json:"startTimeout,omitempty"`
	StopTimeout            *int64                 `json:"stopTimeout,omitempty"`
	SystemControls         []SystemControl        `json:"systemControls,omitempty"`
	Ulimits                []Ulimit               `json:"ulimits,omitempty"`
	User                   *string                `json:"user,omitempty"`
	VolumesFrom            []VolumeFrom           `json:"volumesFrom,omitempty"`
	WorkingDirectory       *string                `json:"workingDirectory,omitempty"`
}
