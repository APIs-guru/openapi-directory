package shared

// IntOptions
// Options for a 64-bit signed integer field. Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.
type IntOptions struct {
	DefaultValue  *int64
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SortEnabled   *bool
	SourceField   *string
}
