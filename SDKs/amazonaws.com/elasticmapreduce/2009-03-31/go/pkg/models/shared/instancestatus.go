package shared

type InstanceStatus struct {
	State             *InstanceStateEnum         `json:"State"`
	StateChangeReason *InstanceStateChangeReason `json:"StateChangeReason"`
	Timeline          *InstanceTimeline          `json:"Timeline"`
}
