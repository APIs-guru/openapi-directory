package shared

type InstanceGroupStatus struct {
	State             *InstanceGroupStateEnum         `json:"State"`
	StateChangeReason *InstanceGroupStateChangeReason `json:"StateChangeReason"`
	Timeline          *InstanceGroupTimeline          `json:"Timeline"`
}
