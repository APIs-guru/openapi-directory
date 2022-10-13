package shared

type ContainerDefinition struct {
	Command                []string               `json:"command"`
	CPU                    *int64                 `json:"cpu"`
	DependsOn              []ContainerDependency  `json:"dependsOn"`
	DisableNetworking      *bool                  `json:"disableNetworking"`
	DNSSearchDomains       []string               `json:"dnsSearchDomains"`
	DNSServers             []string               `json:"dnsServers"`
	DockerLabels           map[string]string      `json:"dockerLabels"`
	DockerSecurityOptions  []string               `json:"dockerSecurityOptions"`
	EntryPoint             []string               `json:"entryPoint"`
	Environment            []KeyValuePair         `json:"environment"`
	EnvironmentFiles       []EnvironmentFile      `json:"environmentFiles"`
	Essential              *bool                  `json:"essential"`
	ExtraHosts             []HostEntry            `json:"extraHosts"`
	FirelensConfiguration  *FirelensConfiguration `json:"firelensConfiguration"`
	HealthCheck            *HealthCheck           `json:"healthCheck"`
	Hostname               *string                `json:"hostname"`
	Image                  *string                `json:"image"`
	Interactive            *bool                  `json:"interactive"`
	Links                  []string               `json:"links"`
	LinuxParameters        *LinuxParameters       `json:"linuxParameters"`
	LogConfiguration       *LogConfiguration      `json:"logConfiguration"`
	Memory                 *int64                 `json:"memory"`
	MemoryReservation      *int64                 `json:"memoryReservation"`
	MountPoints            []MountPoint           `json:"mountPoints"`
	Name                   *string                `json:"name"`
	PortMappings           []PortMapping          `json:"portMappings"`
	Privileged             *bool                  `json:"privileged"`
	PseudoTerminal         *bool                  `json:"pseudoTerminal"`
	ReadonlyRootFilesystem *bool                  `json:"readonlyRootFilesystem"`
	RepositoryCredentials  *RepositoryCredentials `json:"repositoryCredentials"`
	ResourceRequirements   []ResourceRequirement  `json:"resourceRequirements"`
	Secrets                []Secret               `json:"secrets"`
	StartTimeout           *int64                 `json:"startTimeout"`
	StopTimeout            *int64                 `json:"stopTimeout"`
	SystemControls         []SystemControl        `json:"systemControls"`
	Ulimits                []Ulimit               `json:"ulimits"`
	User                   *string                `json:"user"`
	VolumesFrom            []VolumeFrom           `json:"volumesFrom"`
	WorkingDirectory       *string                `json:"workingDirectory"`
}
