package shared

type InstanceFleetStatus struct {
	State             *InstanceFleetStateEnum         `json:"State,omitempty"`
	StateChangeReason *InstanceFleetStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *InstanceFleetTimeline          `json:"Timeline,omitempty"`
}
