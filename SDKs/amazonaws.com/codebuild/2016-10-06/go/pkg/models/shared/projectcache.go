package shared

// ProjectCache
// Information about the cache for the build project.
type ProjectCache struct {
	Location *string         `json:"location,omitempty"`
	Modes    []CacheModeEnum `json:"modes,omitempty"`
	Type     CacheTypeEnum   `json:"type"`
}
