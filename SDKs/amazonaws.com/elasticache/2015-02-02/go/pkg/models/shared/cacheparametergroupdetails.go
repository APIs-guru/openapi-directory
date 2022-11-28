package shared

// CacheParameterGroupDetails
// Represents the output of a <code>DescribeCacheParameters</code> operation.
type CacheParameterGroupDetails struct {
	CacheNodeTypeSpecificParameters []CacheNodeTypeSpecificParameter
	Marker                          *string
	Parameters                      []Parameter
}
