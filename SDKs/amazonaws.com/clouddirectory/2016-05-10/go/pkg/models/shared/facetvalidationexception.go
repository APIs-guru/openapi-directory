package shared

// FacetValidationException
// The <a>Facet</a> that you provided was not well formed or could not be validated with the schema.
type FacetValidationException struct {
	Message *string `json:"Message,omitempty"`
}
