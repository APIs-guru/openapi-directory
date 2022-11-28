package shared

// Location
// A location in a policy that is represented as a path through the JSON representation and a corresponding span.
type Location struct {
	Path []PathElement `json:"path"`
	Span Span          `json:"span"`
}
