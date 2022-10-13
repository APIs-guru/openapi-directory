package shared

type EcsService struct {
	ClusterName *string `json:"clusterName"`
	ServiceName *string `json:"serviceName"`
}
