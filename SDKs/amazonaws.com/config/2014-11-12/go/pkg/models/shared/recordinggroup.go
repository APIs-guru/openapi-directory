package shared

type RecordingGroup struct {
	AllSupported               *bool              `json:"allSupported"`
	IncludeGlobalResourceTypes *bool              `json:"includeGlobalResourceTypes"`
	ResourceTypes              []ResourceTypeEnum `json:"resourceTypes"`
}
