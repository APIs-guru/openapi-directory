package shared

import (
	"time"
)

type ListClustersInput struct {
	ClusterStates []ClusterStateEnum `json:"ClusterStates"`
	CreatedAfter  *time.Time         `json:"CreatedAfter"`
	CreatedBefore *time.Time         `json:"CreatedBefore"`
	Marker        *string            `json:"Marker"`
}
