package shared

// OnEnterLifecycle
// When entering this state, perform these <code>actions</code> if the <code>condition</code> is TRUE.
type OnEnterLifecycle struct {
	Events []Event `json:"events,omitempty"`
}
