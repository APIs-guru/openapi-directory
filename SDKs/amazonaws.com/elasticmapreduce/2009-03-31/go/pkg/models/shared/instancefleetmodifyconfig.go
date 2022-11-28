package shared

// InstanceFleetModifyConfig
// <p>Configuration parameters for an instance fleet modification request.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceFleetModifyConfig struct {
	InstanceFleetID        string `json:"InstanceFleetId"`
	TargetOnDemandCapacity *int64 `json:"TargetOnDemandCapacity,omitempty"`
	TargetSpotCapacity     *int64 `json:"TargetSpotCapacity,omitempty"`
}
