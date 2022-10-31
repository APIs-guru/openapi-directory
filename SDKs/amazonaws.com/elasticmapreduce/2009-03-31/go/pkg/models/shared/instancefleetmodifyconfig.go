package shared



type InstanceFleetModifyConfig struct {
    InstanceFleetID string `json:"InstanceFleetId"`
    TargetOnDemandCapacity *int64 `json:"TargetOnDemandCapacity,omitempty"`
    TargetSpotCapacity *int64 `json:"TargetSpotCapacity,omitempty"`
    
}

