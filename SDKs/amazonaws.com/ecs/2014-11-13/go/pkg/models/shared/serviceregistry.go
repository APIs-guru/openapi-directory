package shared

type ServiceRegistry struct {
	ContainerName *string `json:"containerName,omitempty"`
	ContainerPort *int64  `json:"containerPort,omitempty"`
	Port          *int64  `json:"port,omitempty"`
	RegistryArn   *string `json:"registryArn,omitempty"`
}
