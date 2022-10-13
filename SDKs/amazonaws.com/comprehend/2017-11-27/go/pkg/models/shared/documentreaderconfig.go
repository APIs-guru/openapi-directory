package shared

type DocumentReaderConfig struct {
	DocumentReadAction DocumentReadActionEnum         `json:"DocumentReadAction"`
	DocumentReadMode   *DocumentReadModeEnum          `json:"DocumentReadMode"`
	FeatureTypes       []DocumentReadFeatureTypesEnum `json:"FeatureTypes"`
}
