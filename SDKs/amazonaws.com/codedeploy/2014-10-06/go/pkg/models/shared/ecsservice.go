package shared

type EcsService struct {
	ClusterName *string `json:"clusterName,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}
