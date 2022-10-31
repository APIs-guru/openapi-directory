package shared

import (
"time")

type ListClustersInput struct {
    ClusterStates []ClusterStateEnum `json:"ClusterStates,omitempty"`
    CreatedAfter *time.Time `json:"CreatedAfter,omitempty"`
    CreatedBefore *time.Time `json:"CreatedBefore,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

