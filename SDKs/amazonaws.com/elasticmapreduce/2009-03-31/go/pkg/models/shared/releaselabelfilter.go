package shared

// ReleaseLabelFilter
// The release label filters by application or version prefix.
type ReleaseLabelFilter struct {
	Application *string `json:"Application,omitempty"`
	Prefix      *string `json:"Prefix,omitempty"`
}
