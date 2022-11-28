package shared

// EcsService
//
//	Contains the service and cluster names used to identify an Amazon ECS deployment's target.
type EcsService struct {
	ClusterName *string `json:"clusterName,omitempty"`
	ServiceName *string `json:"serviceName,omitempty"`
}
