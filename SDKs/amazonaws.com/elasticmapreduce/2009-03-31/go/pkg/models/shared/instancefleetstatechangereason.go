package shared

// InstanceFleetStateChangeReason
// <p>Provides status change reason details for the instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
type InstanceFleetStateChangeReason struct {
	Code    *InstanceFleetStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                                 `json:"Message,omitempty"`
}
