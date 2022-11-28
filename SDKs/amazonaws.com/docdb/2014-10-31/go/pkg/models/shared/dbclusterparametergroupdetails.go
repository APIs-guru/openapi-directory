package shared

// DbClusterParameterGroupDetails
// Represents the output of <a>DBClusterParameterGroup</a>.
type DbClusterParameterGroupDetails struct {
	Marker     *string
	Parameters []Parameter
}
