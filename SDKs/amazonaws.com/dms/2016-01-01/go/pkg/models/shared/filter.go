package shared

// Filter
// Identifies the name and value of a filter object. This filter is used to limit the number and type of DMS objects that are returned for a particular <code>Describe*</code> call or similar operation. Filters are used as an optional parameter for certain API operations.
type Filter struct {
	Name   string   `json:"Name"`
	Values []string `json:"Values"`
}
