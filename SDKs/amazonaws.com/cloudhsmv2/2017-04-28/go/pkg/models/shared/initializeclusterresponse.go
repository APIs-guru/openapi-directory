package shared



type InitializeClusterResponse struct {
    State *ClusterStateEnum `json:"State,omitempty"`
    StateMessage *string `json:"StateMessage,omitempty"`
    
}

