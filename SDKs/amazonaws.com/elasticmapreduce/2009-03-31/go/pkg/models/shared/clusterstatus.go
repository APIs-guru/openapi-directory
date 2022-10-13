package shared

type ClusterStatus struct {
	State             *ClusterStateEnum         `json:"State"`
	StateChangeReason *ClusterStateChangeReason `json:"StateChangeReason"`
	Timeline          *ClusterTimeline          `json:"Timeline"`
}
