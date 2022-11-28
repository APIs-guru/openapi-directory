package shared

// CacheNodeTypeSpecificParameter
// A parameter that has a different value for each cache node type it is applied to. For example, in a Redis cluster, a <code>cache.m1.large</code> cache node type would have a larger <code>maxmemory</code> value than a <code>cache.m1.small</code> type.
type CacheNodeTypeSpecificParameter struct {
	AllowedValues               *string
	CacheNodeTypeSpecificValues []CacheNodeTypeSpecificValue
	ChangeType                  *ChangeTypeEnum
	DataType                    *string
	Description                 *string
	IsModifiable                *bool
	MinimumEngineVersion        *string
	ParameterName               *string
	Source                      *string
}
