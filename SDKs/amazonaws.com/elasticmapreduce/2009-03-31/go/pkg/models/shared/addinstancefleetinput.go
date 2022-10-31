package shared



type AddInstanceFleetInput struct {
    ClusterID string `json:"ClusterId"`
    InstanceFleet InstanceFleetConfig `json:"InstanceFleet"`
    
}

