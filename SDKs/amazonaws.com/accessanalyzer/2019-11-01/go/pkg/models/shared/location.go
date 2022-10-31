package shared

type Location struct {
	Path []PathElement `json:"path"`
	Span Span          `json:"span"`
}
