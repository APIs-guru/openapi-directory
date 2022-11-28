package shared

// LiteralArrayOptions
// Options for a field that contains an array of literal strings. Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.
type LiteralArrayOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SourceFields  *string
}
