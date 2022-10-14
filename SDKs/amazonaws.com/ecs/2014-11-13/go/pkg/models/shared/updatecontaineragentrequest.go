package shared

type UpdateContainerAgentRequest struct {
	Cluster           *string `json:"cluster,omitempty"`
	ContainerInstance string  `json:"containerInstance"`
}
