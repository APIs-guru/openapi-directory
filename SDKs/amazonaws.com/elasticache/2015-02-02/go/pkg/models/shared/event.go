package shared

import (
	"time"
)

// Event
// Represents a single occurrence of something interesting within the system. Some examples of events are creating a cluster, adding or removing a cache node, or rebooting a node.
type Event struct {
	Date             *time.Time
	Message          *string
	SourceIdentifier *string
	SourceType       *SourceTypeEnum
}
