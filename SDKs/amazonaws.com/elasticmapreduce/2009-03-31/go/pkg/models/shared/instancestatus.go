package shared

type InstanceStatus struct {
	State             *InstanceStateEnum         `json:"State,omitempty"`
	StateChangeReason *InstanceStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *InstanceTimeline          `json:"Timeline,omitempty"`
}
