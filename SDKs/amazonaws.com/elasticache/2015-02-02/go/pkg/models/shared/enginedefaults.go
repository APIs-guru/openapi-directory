package shared

// EngineDefaults
// Represents the output of a <code>DescribeEngineDefaultParameters</code> operation.
type EngineDefaults struct {
	CacheNodeTypeSpecificParameters []CacheNodeTypeSpecificParameter
	CacheParameterGroupFamily       *string
	Marker                          *string
	Parameters                      []Parameter
}
