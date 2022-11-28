package shared

// InvalidFacetUpdateException
// An attempt to modify a <a>Facet</a> resulted in an invalid schema exception.
type InvalidFacetUpdateException struct {
	Message *string `json:"Message,omitempty"`
}
