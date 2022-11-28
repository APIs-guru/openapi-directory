package shared

// Filter
// A filter used to restrict the results of describe calls. You can use multiple filters to return results that meet all applied filter requirements.
type Filter struct {
	Name   *FilterNameEnum `json:"Name,omitempty"`
	Values []string        `json:"Values,omitempty"`
}
