package shared

type FileFormatConfiguration struct {
	JSONConfiguration    map[string]interface{} `json:"jsonConfiguration,omitempty"`
	ParquetConfiguration *ParquetConfiguration  `json:"parquetConfiguration,omitempty"`
}
