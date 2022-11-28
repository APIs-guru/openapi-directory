package shared

// DoubleOptions
// Options for a double-precision 64-bit floating point field. Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.
type DoubleOptions struct {
	DefaultValue  *float64
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SortEnabled   *bool
	SourceField   *string
}
