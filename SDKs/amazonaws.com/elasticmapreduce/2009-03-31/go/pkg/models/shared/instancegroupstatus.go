package shared

type InstanceGroupStatus struct {
	State             *InstanceGroupStateEnum         `json:"State,omitempty"`
	StateChangeReason *InstanceGroupStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *InstanceGroupTimeline          `json:"Timeline,omitempty"`
}
