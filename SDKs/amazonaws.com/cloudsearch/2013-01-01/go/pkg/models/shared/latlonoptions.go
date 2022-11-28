package shared

// LatLonOptions
// Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.
type LatLonOptions struct {
	DefaultValue  *string
	FacetEnabled  *bool
	ReturnEnabled *bool
	SearchEnabled *bool
	SortEnabled   *bool
	SourceField   *string
}
