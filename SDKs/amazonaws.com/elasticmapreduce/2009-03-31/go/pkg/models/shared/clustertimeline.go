package shared

import (
	"time"
)

// ClusterTimeline
// Represents the timeline of the cluster's lifecycle.
type ClusterTimeline struct {
	CreationDateTime *time.Time `json:"CreationDateTime,omitempty"`
	EndDateTime      *time.Time `json:"EndDateTime,omitempty"`
	ReadyDateTime    *time.Time `json:"ReadyDateTime,omitempty"`
}
