package shared

// CacheEngineVersion
// Provides all of the details about a particular cache engine version.
type CacheEngineVersion struct {
	CacheEngineDescription        *string
	CacheEngineVersionDescription *string
	CacheParameterGroupFamily     *string
	Engine                        *string
	EngineVersion                 *string
}
