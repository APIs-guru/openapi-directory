package shared

// ListenerDescription
// The policies enabled for a listener.
type ListenerDescription struct {
	Listener    *Listener
	PolicyNames []string
}
