package shared

// IntArrayOptions
// Options for a field that contains an array of 64-bit signed integers. Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.
type IntArrayOptions struct {
	DefaultValue  *int64
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SourceFields  *string
}
