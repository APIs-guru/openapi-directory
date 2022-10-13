package shared

type ServiceRegistry struct {
	ContainerName *string `json:"containerName"`
	ContainerPort *int64  `json:"containerPort"`
	Port          *int64  `json:"port"`
	RegistryArn   *string `json:"registryArn"`
}
