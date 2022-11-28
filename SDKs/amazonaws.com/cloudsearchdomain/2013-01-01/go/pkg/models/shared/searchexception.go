package shared

// SearchException
// Information about any problems encountered while processing a search request.
type SearchException struct {
	Message *string `json:"message,omitempty"`
}
