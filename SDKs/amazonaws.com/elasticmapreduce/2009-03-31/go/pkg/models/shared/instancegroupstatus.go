package shared

// InstanceGroupStatus
// The details of the instance group status.
type InstanceGroupStatus struct {
	State             *InstanceGroupStateEnum         `json:"State,omitempty"`
	StateChangeReason *InstanceGroupStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *InstanceGroupTimeline          `json:"Timeline,omitempty"`
}
