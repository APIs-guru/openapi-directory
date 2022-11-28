package shared

// DateOptions
// Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.
type DateOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SortEnabled   *bool
	SourceField   *string
}
