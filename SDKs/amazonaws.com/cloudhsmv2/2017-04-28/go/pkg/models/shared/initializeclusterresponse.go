package shared

type InitializeClusterResponse struct {
	State        *ClusterStateEnum `json:"State"`
	StateMessage *string           `json:"StateMessage"`
}
