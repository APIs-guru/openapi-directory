package shared

// CacheEngineVersionMessage
// Represents the output of a <a>DescribeCacheEngineVersions</a> operation.
type CacheEngineVersionMessage struct {
	CacheEngineVersions []CacheEngineVersion
	Marker              *string
}
