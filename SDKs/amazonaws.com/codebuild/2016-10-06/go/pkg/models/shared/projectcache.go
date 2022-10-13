package shared

type ProjectCache struct {
	Location *string         `json:"location"`
	Modes    []CacheModeEnum `json:"modes"`
	Type     CacheTypeEnum   `json:"type"`
}
