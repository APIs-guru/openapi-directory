package shared

// FacetInUseException
// Occurs when deleting a facet that contains an attribute that is a target to an attribute reference in a different facet.
type FacetInUseException struct {
	Message *string `json:"Message,omitempty"`
}
