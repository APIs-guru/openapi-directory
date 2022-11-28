package shared

// Action
// Specifies an action for an event-based policy.
type Action struct {
	CrossRegionCopy []CrossRegionCopyAction `json:"CrossRegionCopy"`
	Name            string                  `json:"Name"`
}
