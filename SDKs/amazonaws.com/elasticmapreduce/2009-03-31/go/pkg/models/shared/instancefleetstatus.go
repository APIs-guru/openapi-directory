package shared

// InstanceFleetStatus
// <p>The status of the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceFleetStatus struct {
	State             *InstanceFleetStateEnum         `json:"State,omitempty"`
	StateChangeReason *InstanceFleetStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *InstanceFleetTimeline          `json:"Timeline,omitempty"`
}
