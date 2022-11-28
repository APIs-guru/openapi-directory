package shared

// DoubleArrayOptions
// Options for a field that contains an array of double-precision 64-bit floating point values. Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>. All options are enabled by default.
type DoubleArrayOptions struct {
	DefaultValue  *float64
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SourceFields  *string
}
