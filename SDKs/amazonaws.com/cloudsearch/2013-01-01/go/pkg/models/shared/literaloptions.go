package shared

// LiteralOptions
// Options for literal field. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.
type LiteralOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SortEnabled   *bool
	SourceField   *string
}
