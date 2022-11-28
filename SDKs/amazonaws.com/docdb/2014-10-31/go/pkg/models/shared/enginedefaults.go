package shared

// EngineDefaults
// Contains the result of a successful invocation of the <code>DescribeEngineDefaultClusterParameters</code> operation.
type EngineDefaults struct {
	DbParameterGroupFamily *string
	Marker                 *string
	Parameters             []Parameter
}
