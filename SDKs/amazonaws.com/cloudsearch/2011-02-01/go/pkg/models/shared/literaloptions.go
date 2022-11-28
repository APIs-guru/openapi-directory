package shared

// LiteralOptions
// Options that define a literal field in the search index.
type LiteralOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ResultEnabled *bool
	SearchEnabled *bool
}
