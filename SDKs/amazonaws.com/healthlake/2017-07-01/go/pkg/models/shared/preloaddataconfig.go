package shared

// PreloadDataConfig
//
//	The input properties for the preloaded Data Store. Only data preloaded from Synthea is supported.
type PreloadDataConfig struct {
	PreloadDataType PreloadDataTypeEnum `json:"PreloadDataType"`
}
