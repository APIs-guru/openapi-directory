package shared

type ModifyInstanceFleetInput struct {
	ClusterID     string                    `json:"ClusterId"`
	InstanceFleet InstanceFleetModifyConfig `json:"InstanceFleet"`
}
