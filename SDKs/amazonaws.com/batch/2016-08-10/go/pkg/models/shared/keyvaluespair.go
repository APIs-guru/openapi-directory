package shared

// KeyValuesPair
// A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.
type KeyValuesPair struct {
	Name   *string  `json:"name,omitempty"`
	Values []string `json:"values,omitempty"`
}
