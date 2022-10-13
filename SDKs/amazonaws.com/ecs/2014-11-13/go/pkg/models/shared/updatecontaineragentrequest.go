package shared

type UpdateContainerAgentRequest struct {
	Cluster           *string `json:"cluster"`
	ContainerInstance string  `json:"containerInstance"`
}
