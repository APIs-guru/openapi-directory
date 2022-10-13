package shared

type DiscoverPollEndpointRequest struct {
	Cluster           *string `json:"cluster"`
	ContainerInstance *string `json:"containerInstance"`
}
