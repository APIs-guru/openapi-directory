package shared

type ListInstancesInput struct {
	ClusterID          string                  `json:"ClusterId"`
	InstanceFleetID    *string                 `json:"InstanceFleetId"`
	InstanceFleetType  *InstanceFleetTypeEnum  `json:"InstanceFleetType"`
	InstanceGroupID    *string                 `json:"InstanceGroupId"`
	InstanceGroupTypes []InstanceGroupTypeEnum `json:"InstanceGroupTypes"`
	InstanceStates     []InstanceStateEnum     `json:"InstanceStates"`
	Marker             *string                 `json:"Marker"`
}
