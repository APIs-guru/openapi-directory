package shared

// StillContainsLinksException
// The object could not be deleted because links still exist. Remove the links and then try the operation again.
type StillContainsLinksException struct {
	Message *string `json:"Message,omitempty"`
}
