package shared

// ClusterStatus
// The detailed status of the cluster.
type ClusterStatus struct {
	State             *ClusterStateEnum         `json:"State,omitempty"`
	StateChangeReason *ClusterStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *ClusterTimeline          `json:"Timeline,omitempty"`
}
