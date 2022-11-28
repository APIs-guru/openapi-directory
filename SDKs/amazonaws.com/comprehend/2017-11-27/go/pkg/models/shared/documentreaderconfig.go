package shared

// DocumentReaderConfig
// The input properties for a topic detection job.
type DocumentReaderConfig struct {
	DocumentReadAction DocumentReadActionEnum         `json:"DocumentReadAction"`
	DocumentReadMode   *DocumentReadModeEnum          `json:"DocumentReadMode,omitempty"`
	FeatureTypes       []DocumentReadFeatureTypesEnum `json:"FeatureTypes,omitempty"`
}
