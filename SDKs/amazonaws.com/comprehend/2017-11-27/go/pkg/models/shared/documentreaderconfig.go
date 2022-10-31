package shared



type DocumentReaderConfig struct {
    DocumentReadAction DocumentReadActionEnum `json:"DocumentReadAction"`
    DocumentReadMode *DocumentReadModeEnum `json:"DocumentReadMode,omitempty"`
    FeatureTypes []DocumentReadFeatureTypesEnum `json:"FeatureTypes,omitempty"`
    
}

