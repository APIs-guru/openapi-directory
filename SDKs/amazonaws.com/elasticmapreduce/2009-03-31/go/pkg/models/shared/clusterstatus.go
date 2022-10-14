package shared

type ClusterStatus struct {
	State             *ClusterStateEnum         `json:"State,omitempty"`
	StateChangeReason *ClusterStateChangeReason `json:"StateChangeReason,omitempty"`
	Timeline          *ClusterTimeline          `json:"Timeline,omitempty"`
}
