package shared

// DateArrayOptions
// Options for a field that contains an array of dates. Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.
type DateArrayOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SourceFields  *string
}
