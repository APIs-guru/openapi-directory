package shared

type InstanceFleetStatus struct {
	State             *InstanceFleetStateEnum         `json:"State"`
	StateChangeReason *InstanceFleetStateChangeReason `json:"StateChangeReason"`
	Timeline          *InstanceFleetTimeline          `json:"Timeline"`
}
