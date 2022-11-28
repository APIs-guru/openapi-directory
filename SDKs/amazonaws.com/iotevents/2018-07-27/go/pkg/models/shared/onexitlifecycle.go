package shared

// OnExitLifecycle
// When exiting this state, perform these <code>actions</code> if the specified <code>condition</code> is <code>TRUE</code>.
type OnExitLifecycle struct {
	Events []Event `json:"events,omitempty"`
}
