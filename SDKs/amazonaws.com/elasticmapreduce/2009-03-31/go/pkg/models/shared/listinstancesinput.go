package shared

type ListInstancesInput struct {
	ClusterID          string                  `json:"ClusterId"`
	InstanceFleetID    *string                 `json:"InstanceFleetId,omitempty"`
	InstanceFleetType  *InstanceFleetTypeEnum  `json:"InstanceFleetType,omitempty"`
	InstanceGroupID    *string                 `json:"InstanceGroupId,omitempty"`
	InstanceGroupTypes []InstanceGroupTypeEnum `json:"InstanceGroupTypes,omitempty"`
	InstanceStates     []InstanceStateEnum     `json:"InstanceStates,omitempty"`
	Marker             *string                 `json:"Marker,omitempty"`
}
