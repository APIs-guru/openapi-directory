package shared

type ClusterStateChangeReason struct {
	Code    *ClusterStateChangeReasonCodeEnum `json:"Code,omitempty"`
	Message *string                           `json:"Message,omitempty"`
}
