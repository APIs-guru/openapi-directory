package shared

// FacetAlreadyExistsException
// A facet with the same name already exists.
type FacetAlreadyExistsException struct {
	Message *string `json:"Message,omitempty"`
}
