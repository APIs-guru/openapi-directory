package shared

// TextOptions
// Options that define a text field in the search index.
type TextOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ResultEnabled *bool
	TextProcessor *string
}
