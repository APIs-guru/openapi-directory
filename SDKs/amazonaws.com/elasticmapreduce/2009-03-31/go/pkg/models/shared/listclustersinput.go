package shared

import (
	"time"
)

// ListClustersInput
// This input determines how the ListClusters action filters the list of clusters that it returns.
type ListClustersInput struct {
	ClusterStates []ClusterStateEnum `json:"ClusterStates,omitempty"`
	CreatedAfter  *time.Time         `json:"CreatedAfter,omitempty"`
	CreatedBefore *time.Time         `json:"CreatedBefore,omitempty"`
	Marker        *string            `json:"Marker,omitempty"`
}
