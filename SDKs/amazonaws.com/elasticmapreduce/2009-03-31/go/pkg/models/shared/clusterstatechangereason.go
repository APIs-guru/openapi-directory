package shared

type ClusterStateChangeReason struct {
	Code    *ClusterStateChangeReasonCodeEnum `json:"Code"`
	Message *string                           `json:"Message"`
}
