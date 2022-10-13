package shared

type ExecuteCommandResponse struct {
	ClusterArn    *string  `json:"clusterArn"`
	ContainerArn  *string  `json:"containerArn"`
	ContainerName *string  `json:"containerName"`
	Interactive   *bool    `json:"interactive"`
	Session       *Session `json:"session"`
	TaskArn       *string  `json:"taskArn"`
}
