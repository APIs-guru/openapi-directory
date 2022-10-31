package shared



type ExecuteCommandResponse struct {
    ClusterArn *string `json:"clusterArn,omitempty"`
    ContainerArn *string `json:"containerArn,omitempty"`
    ContainerName *string `json:"containerName,omitempty"`
    Interactive *bool `json:"interactive,omitempty"`
    Session *Session `json:"session,omitempty"`
    TaskArn *string `json:"taskArn,omitempty"`
    
}

