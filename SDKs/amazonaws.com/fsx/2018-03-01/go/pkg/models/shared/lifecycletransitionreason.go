package shared

// LifecycleTransitionReason
// Describes why a resource lifecycle state changed.
type LifecycleTransitionReason struct {
	Message *string `json:"Message,omitempty"`
}
