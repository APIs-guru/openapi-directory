package shared

// Listener
// Describes the properties of a Listener for the LoadBalancer.
type Listener struct {
	Port     *int64
	Protocol *string
}
