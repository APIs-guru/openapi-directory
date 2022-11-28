package shared

// ClusterStateChangeReason
// The reason that the cluster changed to its current state.
type ClusterStateChangeReason struct {
	Code    *ClusterStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                           `json:"Message,omitempty"`
}
