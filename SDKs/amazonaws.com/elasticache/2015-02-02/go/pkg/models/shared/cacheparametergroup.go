package shared

// CacheParameterGroup
// Represents the output of a <code>CreateCacheParameterGroup</code> operation.
type CacheParameterGroup struct {
	Arn                       *string
	CacheParameterGroupFamily *string
	CacheParameterGroupName   *string
	Description               *string
	IsGlobal                  *bool
}
